import { useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { SearchInput } from '../Search/SearchInput'
import './Header.css'

export function Header() {
  const user = useTypedSelector(state => state.user)
  const location = useLocation()
  const {showAddPublicationForm} = useActions()

  if (location.pathname === '/search') {
    return (
      <header className='header'>
      <div className='header__container'>
        <SearchInput/>
      </div>
    </header>
    )
  }

  if (location.pathname === '/') {
    return (
      <header className='header'>
      <div className='header__container'>
        <div className='header__logo-container'>
          <img className='header__logo' src={require('../../images/logo/gramm.jpg')}/>
        </div>
        <div className='header__buttons-container'>
          <button className='header__button header__button_type_add-foto' type={'button'} onClick={() => showAddPublicationForm(true)}></button>
          <button className='header__button header__button_type_open-messages'></button>
        </div>
      </div>
    </header>
    )
  }
  
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__user-login-container'>
          <div className='header__lock-image'/>
          <p className='header__user-login'>{user.login}</p>
          <div className='header__arrow-image'></div>
        </div>
        <div className='header__buttons-container'>
          <button className='header__button header__button_type_add-foto' type={'button'} onClick={() => showAddPublicationForm(true)}></button>
          <button className='header__button header__button_type_open-messages'></button>
        </div>
      </div>
    </header>
  )
}