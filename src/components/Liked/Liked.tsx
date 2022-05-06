import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'
import './Liked.css'

export function Liked() {
  return (
    <section className='liked'>
      <Header/>
      <p className='liked__text'>Тут пока ничего нет</p>
      <Navigation/>
    </section>
  )
}