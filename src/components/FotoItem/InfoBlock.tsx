import { AddCommentForm } from './AddCommentForm'
import { FotoDescription } from './FotoDescription'
import './InfoBlock.css'
import { SocialIconsBlock } from './SocialIconsBlock'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Publication } from '../../types/publication'

export function InfoBlock(props: {publication: Publication}) {

  const [comments, setComments] = useState([])

  return (
    <div className='info'>

    <SocialIconsBlock/>

    <p className='info__likes'>Нравится: {props.publication.likes.length}</p>
    <FotoDescription publication={props.publication}/>
    <NavLink className='info__show-all-comments-button' to={'/comments'}>Смотреть все комментарии ({props.publication.comments.length})</NavLink>
    <AddCommentForm/>

    <p className='info__date'>{String(props.publication.date)}</p>

  </div>
  )
}