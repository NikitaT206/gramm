import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'
import './Video.css'

export function Video() {
  return (
    <section className='video'>
      <Header/>
      <p className='video__text'>Тут пока ничего нет</p>
      <Navigation/>
    </section>
  )
}