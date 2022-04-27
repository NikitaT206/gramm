import { Avatar } from '../Avatar/Avatar'
import './EditProfile.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { useEffect, useState } from 'react'

export function EditProfile() {
  const user = useTypedSelector(state => state.user)
  const editProfile = useTypedSelector(state => state.app.showEditProfile)
  const {showEditProfile} = useActions()
  const {changeProfile} = useActions()

  const [data, setData] = useState({name: user.name, login: user.login, website: user.website, biography: user.biography, avatar: user.avatar})
  
  function onChangeHandler(event: any) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function changeAvatarHandler(event: any) {
    const [file] = event.target.files
    setData({...data, avatar: URL.createObjectURL(file)})
  }

  function submitHandler(event: any) {
    event.preventDefault()
    showEditProfile(false)
    changeProfile(data)
  }

  return (
    <section className={!editProfile ? 'edit-profile' : 'edit-profile edit-profile_active'}>

      <form className='edit-profile__form' onSubmit={submitHandler}>

        <div className='edit-profile__heading'>
          <button className='edit-profile__button' type={'button'} onClick={() => showEditProfile(false)}>X</button>
          <h2 className='edit-profile__title'>Редактировать профиль</h2>
          <button className='edit-profile__button' type={'submit'}>V</button>
        </div>

        <div className={!editProfile ? 'edit-profile__others' : 'edit-profile__others edit-profile__others_active' }>

          <div className='edit-profile__avatar-container'>
              <input className='edit-profile__avatar-input' type={'file'} name='avatar' onChange={changeAvatarHandler}/>
              <Avatar editProfile={true}/>
              <button className='edit-profile__edit-avatar-buton'>Изменить фото профиля</button>
          </div>

          <div className='edit-profile__inputs-container'>

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

          </div>
        </div>
      </form>     
    </section>
  )
}