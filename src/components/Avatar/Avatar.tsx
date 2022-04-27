import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './Avatar.css'

export function Avatar(props: {profile?: boolean, editProfile?: boolean, publication?: boolean, navigation?: boolean}) {
  const user = useTypedSelector(state => state.user)

  if (props.navigation || props.profile || props.editProfile) {
    return (
      <div className={
        props.profile ? 'avatar avatar_type_profile' :
        props.editProfile ? 'avatar avatar_type_change-profile' :
        props.publication ? 'avatar avatar_type_publication' : 
        props.navigation ? 'avatar avatar_type_navigation' : 'avatar'
      }>
        <img className='avatar__image' src={user.avatar}></img>
      </div>
    )
  }

  else {
    return (
      <NavLink to={'/profile'}>
         <div className={
        props.profile ? 'avatar avatar_type_profile' :
        props.editProfile ? 'avatar avatar_type_change-profile' :
        props.publication ? 'avatar avatar_type_publication' : 
        props.navigation ? 'avatar avatar_type_navigation' : 'avatar'
      }>
        <img className='avatar__image' src={user.avatar}></img>
      </div>
      </NavLink>
    )
  }
}