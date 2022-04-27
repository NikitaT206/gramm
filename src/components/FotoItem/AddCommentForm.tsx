import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Avatar } from '../Avatar/Avatar'
import './AddCommentForm.css'

export function AddCommentForm() {
  const user = useTypedSelector(state => state.user)

  return (
    <form className='add-coment-form'>
    <Avatar publication={true}/>
    <input className='add-coment-form__input' type={'text'} placeholder='Добавьте комментарий...'></input>
  </form>
  )
}