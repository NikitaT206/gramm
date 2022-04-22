import { useState } from 'react';
import { user } from '../../constants/users';
import './UserGallery.css'

export function UserGallery() {
  const [columnView, setColumnView] = useState(false)

  return (
    <div className={!columnView ? 'user-gallery' : 'user-gallery-flex'}>
      {user.fotos.map((item, index) => {
        return (
          <div className='user-gallery__item' key={index}>
            <img className='user-gallery__image' src={item.image} ></img>
          </div>
        )
      })}
    </div>
  )
}