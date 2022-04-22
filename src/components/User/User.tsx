import { user } from '../../constants/users'
import { UserGallery } from './UserGallery'
import './User.css'

export function User() {
  return (
    <div className='user'>
      <div className='user__info'>
        <div className='user__avatar-and-content-block'>
          <img className='user__avatar' src={user.avatar}></img>
          <div className='user__content-info'>
            <div className='user__content-block'>
              <div className='user__number'>12</div>
              <div className='user__block-name'>Публикации</div>
            </div>
            <div className='user__content-block'>
              <div className='user__number'>54</div>
              <div className='user__block-name'>Подписчики</div>
            </div>
            <div className='user__content-block'>
              <div className='user__number'>204</div>
              <div className='user__block-name'>Подписки</div>
            </div>
          </div>
        </div>
        <div className='user__text-content'>
          <p className='user__name'>{user.firstName + ' ' + user.lastName}</p>
          <p className='user__description'>{user.description}</p>
        </div>
      </div>
      <UserGallery/>

    </div>
  )
}