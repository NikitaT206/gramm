import { UserGallery } from './UserGallery'
import './User.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Avatar } from '../Avatar/Avatar'
import { UserSocialBlock } from './UserSocialBlock'
import { UserTextContent } from './UserTextContent'
import { NavLink } from 'react-router-dom'
import { EditProfile } from '../EditProfile/EditProfile'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'

export function User() {
  const user = useTypedSelector(state => state.user)
  const {showEditProfile} = useActions()
  const editProfile = useTypedSelector(state => state.app.showEditProfile)

  return (
    <div className='user'>
      {/* {editProfile ? <EditProfile/> : '' } */}
      <EditProfile/>

      <div className='user__info'>
        <div className='user__avatar-and-content-block'>
          <Avatar profile={true}/>
          <UserSocialBlock/>
        </div>
        <UserTextContent/>
        <button onClick={() => showEditProfile(true)}>Редактировать профиль</button>
      </div>
      <UserGallery/>
    </div>
  )
}