import './UserTextContent.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserStatus } from './UserStatus'
import { UserName } from '../UserName/UserName'


export function UserTextContent() {
  const user = useTypedSelector(state => state.user)

  return (
    <div className='user-text-content'>
      <UserName/>
      <UserStatus/>
      <p className='user-text-content__biography'>{user.biography}</p>
      <a className='user-text-content__website' href={user.website}>{user.website}</a>
    </div>
  )
}