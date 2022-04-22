import './Navigation.css'
import { NavLink } from 'react-router-dom'

export function Navigation() {
  const setActiveHome = ({ isActive}: any) =>(isActive ? 'navigation__button navigation__button_type_home_active'  : 'navigation__button navigation__button_type_home');
  const setActiveSearch = ({ isActive}: any) =>(isActive ? 'navigation__button navigation__button_type_search_active'  : 'navigation__button navigation__button_type_search');
  const setActiveVideo = ({ isActive}: any) =>(isActive ? 'navigation__button navigation__button_type_video_active'  : 'navigation__button navigation__button_type_video');
  const setActiveHeart = ({ isActive}: any) =>(isActive ? 'navigation__button navigation__button_type_heart_active'  : 'navigation__button navigation__button_type_heart');
  const setActiveProfile = ({ isActive}: any) =>(isActive ? 'navigation__button navigation__button_type_profile_active'  : 'navigation__button navigation__button_type_profile');
  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <NavLink className={setActiveHome} to={'/'}></NavLink>
        <NavLink className={setActiveSearch} to={'/search'}></NavLink>
        <NavLink className={setActiveVideo} to={'/video'}></NavLink>
        <NavLink className={setActiveHeart} to={'/liked'}></NavLink>
        <NavLink className={setActiveProfile} to={'/profile'}></NavLink>
      </div>
    </nav>
  )
}