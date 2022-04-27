import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './UserGallery.css'

export function UserGallery() {
  const [columnView, setColumnView] = useState(false)
  const user = useTypedSelector(state => state.user)


  return (
    <div className={!columnView ? 'user-gallery' : 'user-gallery-flex'}>
      {user.publications.map((item, index) => {
        return (
          <div className='user-gallery__item' key={index}>
            <img className='user-gallery__image' src={item.image} ></img>
          </div>
        )
      })}
    </div>
  )
}