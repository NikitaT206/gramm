import './Search.css'
import { user } from '../../constants/users'
import { myList2 } from '../MyList/MyList'
import { SearchItem } from './SearchItem'

export function Search() {

  return (
    <section className='search'>
      <div className='search__gallery'>
        {myList2.map((foto, index) => {
          return (
            <SearchItem foto={foto} key={index}/>
          )
        })}
      </div>
    </section>
  )
}