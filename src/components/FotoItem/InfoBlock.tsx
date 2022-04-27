import { AddCommentForm } from './AddCommentForm'
import { FotoDescription } from './FotoDescription'
import './InfoBlock.css'
import { SocialIconsBlock } from './SocialIconsBlock'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export function InfoBlock() {

  const [comments, setComments] = useState([])

  return (
    <div className='info'>

    <SocialIconsBlock/>

    <p className='info__likes'>Нравится: {2}</p>
    <FotoDescription/>
    <NavLink className='info__show-all-comments-button' to={'/comments'}>Смотреть все комментарии ({comments.length})</NavLink>
    <AddCommentForm/>

    <p className='info__date'>1 день назад</p>

  </div>
  )
}