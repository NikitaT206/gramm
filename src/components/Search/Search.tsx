import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'
import './Search.css'
import { SearchItem } from './SearchItem'

export function Search() {

  const user = useTypedSelector(state => state.user)


  return (
    <section className='search'>
      <Header/>
      <div className='search__gallery'>
        {user.publications.map((foto, index) => {
          return (
            <SearchItem foto={foto} key={index}/>
          )
        })}
      </div>
      <Navigation/>
    </section>
  )
}