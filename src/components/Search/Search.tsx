import { useTypedSelector } from '../../hooks/useTypedSelector'
import './Search.css'
import { SearchItem } from './SearchItem'

export function Search() {

  const user = useTypedSelector(state => state.user)


  return (
    <section className='search'>
      <div className='search__gallery'>
        {user.publications.map((foto, index) => {
          return (
            <SearchItem foto={foto} key={index}/>
          )
        })}
      </div>
    </section>
  )
}