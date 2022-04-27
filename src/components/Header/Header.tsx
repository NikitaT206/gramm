import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { SearchInput } from '../Search/SearchInput'
import './Header.css'

export function Header() {
  const user = useTypedSelector(state => state.user)
  const location = useLocation()

  if (location.pathname === '/search') {
    return (
      <header className='header'>
      <div className='header__container'>
        <SearchInput/>
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
          <button className='header__button header__button_type_add-foto'></button>
          <button className='header__button header__button_type_open-messages'></button>
        </div>
      </div>
    </header>
  )
}