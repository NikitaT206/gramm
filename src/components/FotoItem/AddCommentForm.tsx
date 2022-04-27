import { useTypedSelector } from '../../hooks/useTypedSelector'
import './AddCommentForm.css'

export function AddCommentForm() {
  const user = useTypedSelector(state => state.user)

  return (
    <form className='add-coment-form'>
      <div className='add-coment-form__user-avatar-container'>
        <img className='add-coment-form__user-avatar-image' src={user.avatar}/>
      </div>
    <input className='add-coment-form__input' type={'text'} placeholder='Добавьте комментарий...'></input>
  </form>
  )
}