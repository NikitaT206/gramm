import { Avatar } from '../Avatar/Avatar'
import './EditProfile.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { useState } from 'react'
import { PopupWithForm } from '../PopupWithForm/PopupWithForm'

export function EditProfile() {
  const user = useTypedSelector(state => state.user)
  const {showEditProfile} = useActions()
  const {editProfile} = useActions()

  const [data, setData] = useState({name: user.name, login: user.login, website: user.website, biography: user.biography, avatar: user.avatar})
  
  function onChangeHandler(event: any) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function onCancelHandler() {
    showEditProfile(false)
    setData({name: user.name, login: user.login, website: user.website, biography: user.biography, avatar: user.avatar})
  }

  function changeAvatarHandler(event: any) {
    const [file] = event.target.files
    setData({...data, avatar: URL.createObjectURL(file)})
  }

  function submitHandler() {
    editProfile(data)
    showEditProfile(false)
  }

  return (
   <PopupWithForm title='Редактировать профиль' onSubmit={submitHandler} onCancel={onCancelHandler}>

      <div className='edit-profile__avatar-container'>
        <input className='edit-profile__avatar-input' type={'file'} name='avatar' onChange={changeAvatarHandler}/>
        <Avatar editProfile={true}/>
        <button className='edit-profile__edit-avatar-buton'>Изменить фото профиля</button>
      </div>

      <label className='edit-profile-form__label'>Имя
        <input 
          className='edit-profile-form__input' 
          value={data.name || ''} 
          onChange={onChangeHandler} 
          name='name'
          type={'text'}
          required
          />
      </label>

      <label className='edit-profile-form__label'>Имя пользователя
        <input 
          className='edit-profile-form__input' 
          value={data.login || ''} 
          onChange={onChangeHandler} 
          name='login'
          type={'text'}
          required
        />
      </label>

      <label className='edit-profile-form__label'>Сайт
        <input 
          className='edit-profile-form__input' 
          value={data.website || ''} 
          onChange={onChangeHandler} 
          name='website'
          type={'text'}
        />
      </label>

      <label className='edit-profile-form__label'>Биография
        <input 
          className='edit-profile-form__input' 
          value={data.biography || ''} 
          onChange={onChangeHandler} 
          name='biography'
          type={'text'}
        />
      </label>

   </PopupWithForm>
  )
}