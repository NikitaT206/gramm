import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../api/user'
import { useActions } from '../../hooks/useActions'
import './Login.css'

export function Login() {
  const [data, setData] = useState({name: '', login: '', email: '', password: ''})
  const {setLoggedIn} = useActions()
  const navigate = useNavigate()
  
  function onChangeHandler(event: any) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function submitHandler(event: any) {
    event.preventDefault()
    api.signin(data).then(data => {
      if (data) {
        setLoggedIn(true)
        setTimeout(() => {
          navigate('/profile')
        }, 1000)
      }
    }).catch(err => console.log(err))
  }

  return (
    <section className='login' >
      <h1 className='login__title'>Авторизация</h1>

      <form className='login__form' onSubmit={submitHandler}>
       
        <label className='login__label'>Email
          <input className='login__input' name='email' type={'text'} onChange={onChangeHandler}></input>
        </label>

        <label className='login__label'>Пароль
          <input className='login__input' name='password' type={'password'} onChange={onChangeHandler}></input>
        </label>

        <button type='submit'>Войти</button>

      </form>

      <Link to={'/signup'}>Регистрация</Link>
    </section>
  )
}