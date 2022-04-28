import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { PopupWithForm } from '../PopupWithForm/PopupWithForm'
import './AddPublication.css'

export function AddPublication() {
  const user = useTypedSelector(state => state.user)

  const [data, setData] = useState({image: '', description: '', likes: [], date: new Date, comments: [], owner: user, id: Math.random()})
  const {showAddPublicationForm} = useActions()
  const {addPublication} = useActions()

  function onChangeHandler(event: any) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function onChangeImageHandler(event: any) {
    const [file] = event.target.files
    setData({...data, image: URL.createObjectURL(file)})
  }

  function onCancelHandler() {
    showAddPublicationForm(false)
  }

  function onSubmitHandler() {
    addPublication(data)
  }

  return (
   <PopupWithForm title='Добавить публикацию' onSubmit={onSubmitHandler} onCancel={onCancelHandler}>

    <label className='edit-profile-form__label'>Выберите файл
      <input 
        className='edit-profile-form__input' 
        onChange={onChangeImageHandler} 
        name='image'
        type={'file'}
        required
      />
      </label>

     <label className='edit-profile-form__label'>Описание
      <input 
        className='edit-profile-form__input' 
        onChange={onChangeHandler} 
        name='description'
        type={'text'}
        required
      />
    </label>
   </PopupWithForm>
    
  )
}