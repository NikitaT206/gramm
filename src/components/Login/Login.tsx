import { useState } from 'react'
import { api } from '../../api/user'
import './Login.css'

export function Login() {
  const [data, setData] = useState({name: '', login: '', email: '', password: ''})
  
  function onChangeHandler(event: any) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function submitHandler(event: any) {
    event.preventDefault()
    api.signin(data).then(data => console.log(data))
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
    </section>
  )
}