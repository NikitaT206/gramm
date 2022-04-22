import './HeadingBlock.css'

export function HeadingBlock() {
  return (
    <div className='heading-block'>
      <div className='heading-block__user-info'>
        <div className='heading-block__user-avatar-container'>
          <img className='heading-block__avatar'/>
        </div>
        <p className='heading-block__login-name'>userName</p>
      </div>
      <button className='heading-block__settings-button' type={'button'}>
        <div className='heading-block__circle'></div>
        <div className='heading-block__circle'></div>
        <div className='heading-block__circle'></div>
      </button>
    </div>
  )
}