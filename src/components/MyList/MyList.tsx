import './MyList.css'
import { useEffect } from 'react'
import { FotoItem } from '../FotoItem/FotoItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export function MyList() {

  const user = useTypedSelector(state => state.user)

  return (
    <div className='my-list'>
      <div className='my-list__container'>
        {user.publications.map((item, index) => {
          return (
            <FotoItem item={item} key={index}/>
          )
        }).sort(() => Math.random() - 0.5)}
      </div>
    </div>
  )
}