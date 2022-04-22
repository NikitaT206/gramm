import './MyList.css'
import { user } from '../../constants/users'
import { user2, user3, user4 } from '../../constants/users'
import { useEffect } from 'react'
import { FotoItem } from '../FotoItem/FotoItem'
export const myList2: any[] = []


export function MyList() {
  const users = [user2, user3, user4]

  const myList = users.map(user => user.fotos.map(item => myList2.push(item)))
  
  return (
    <div className='my-list'>
      <div className='my-list__container'>
        {myList2.map((item, index) => {
          return (
            <FotoItem item={item} key={index}/>
          )
        }).sort(() => Math.random() - 0.5)}
      </div>
    </div>
  )
}