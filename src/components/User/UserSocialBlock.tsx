import './UserSocialBlock.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'


export function UserSocialBlock() {
  const user = useTypedSelector(state => state.user)

  return (
    <div className='user-social-block'>
      <div className='user-social-block__content-block'>
        <div className='user-social-block__number'>{user.publications.length}</div>
        <div className='user-social-block__block-name'>Публикации</div>
      </div>
      <div className='user-social-block__content-block'>
        <div className='user-social-block__number'>{user.subscribers.length}</div>
        <div className='user-social-block__block-name'>Подписчики</div>
      </div>
      <div className='user-social-block__content-block'>
        <div className='user-social-block__number'>{user.subscriptions.length}</div>
        <div className='user-social-block__block-name'>Подписки</div>
      </div>
    </div>
  )
}