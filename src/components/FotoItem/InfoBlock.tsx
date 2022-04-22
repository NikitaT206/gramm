import { AddCommentForm } from './AddCommentForm'
import { FotoDescription } from './FotoDescription'
import './InfoBlock.css'
import { SocialIconsBlock } from './SocialIconsBlock'

export function InfoBlock() {
  return (
    <div className='info'>

    <SocialIconsBlock/>

    <p className='info__likes'>Нравится: {2}</p>
    <FotoDescription/>
    <button className='info__show-all-comments-button'>Смотреть все комментарии (666)</button>
    <AddCommentForm/>

    <p className='info__date'>1 день назад</p>

  </div>
  )
}