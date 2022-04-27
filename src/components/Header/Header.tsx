import { useTypedSelector } from '../../hooks/useTypedSelector'
import './Header.css'

export function Header() {
  const user = useTypedSelector(state => state.user)

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