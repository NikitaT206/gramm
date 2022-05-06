import './MyList.css'
import { FotoItem } from '../FotoItem/FotoItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'

export function MyList() {

  const user = useTypedSelector(state => state.user)

  return (
    <div className='my-list'>
      <Header/>
      <div className='my-list__container'>
        {user.publications.map((item, index) => {
          return (
            <FotoItem item={item} key={item.id}/>
          )
        })}
      </div>
      <Navigation/>
    </div>
  )
}