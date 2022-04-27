import { useTypedSelector } from '../../hooks/useTypedSelector'
import './UserName.css'

export function UserName() {
  const user = useTypedSelector(state => state.user)

  return (
    <span className='user-name'>{user.name} </span>
  )
}