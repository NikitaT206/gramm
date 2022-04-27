import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Avatar } from '../Avatar/Avatar'
import { UserName } from '../UserName/UserName'
import './HeadingBlock.css'

export function HeadingBlock() {
  const user = useTypedSelector(state => state.user)

  return (
    <div className='heading-block'>
      <div className='heading-block__user-info'>
        <Avatar publication={true}/>
        <UserName/>
      </div>
      <button className='heading-block__settings-button' type={'button'}>
        <div className='heading-block__circle'></div>
        <div className='heading-block__circle'></div>
        <div className='heading-block__circle'></div>
      </button>
    </div>
  )
}