import { useState } from 'react'
import './SocialIconsBlock.css'

export function SocialIconsBlock() {
  const [like, setLike] = useState(false)
  function likeSet() {
    setLike(!like)
  }
  return (
    <div className='social-icons'>
      
      <div className='social-icons__likes-coment-share-buttons'>
        <button 
          className=
            {!like 
              ? 'social-icons__button social-icons__button_type_like' 
              : 'social-icons__button social-icons__button_type_like social-icons__button_type_like_active'}
              onClick={likeSet}
              ></button>
        <button className='social-icons__button social-icons__button_type_comment'></button>
        <button className='social-icons__button social-icons__button_type_share'></button>
      </div>
      <button className='social-icons__button foto-item__button_type_save'></button>

      <div className='social-icons__circles-of-items'>
        <div className='social-icons__circle social-icons__circle_active'></div>
        <div className='social-icons__circle'></div>
        <div className='social-icons__circle'></div>
      </div>
    
  </div>
  )
}