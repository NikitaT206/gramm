import './Header.css'
import { user } from '../../constants/users'

export function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__user-login-container'>
          <div className='header__lock-image'/>
          <p className='header__user-login'>{user.login}</p>
          <div className='header__arrow-image'></div>
        </div>
        <div className='header__buttons-container'>
          <button className='header__button header__button_type_add-foto'></button>
          <button className='header__button header__button_type_open-messages'></button>
        </div>
      </div>
    </header>
  )
}