import './UserStatus.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'


export function UserStatus() {
  const user = useTypedSelector(state => state.user)

  return (
    <div className='user-status'>
      <div className='user-status__image-container'>
        <img className='user-status__image'></img>
      </div>
      <p className='user-status__text'>{user.status}</p>
    </div>
  )
}