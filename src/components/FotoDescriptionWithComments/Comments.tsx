import './Comments.css'

export function Comments(props: any) {
  const min = Math.floor(Math.random() * 20)
  const max = Math.floor(Math.random() * 40 + 20)

  return (
    <section className='comments'>
      {props.comments.slice(min, max).map((comment: any, index: number) => {
       return (
        <div className='comment' key={index}>
          <div className='comment__avatar-container'>
            <img className='comment__avatar'></img>
          </div>
          <div className='comment__text-block'>
            <p className='comment__text'><span className='comment__user-name'>username </span>{comment}</p>
            <div className='comment__social-block'>
              <span className='comment__time'>14 ч.</span>
              <span className='comment__likes-length'>Нравится: 2</span>
              <button className='comment__answer-button'>Ответить</button>
            </div>
            <button className='comment__show-answers-button'>Смотреть еще 1 ответ</button>
          </div>
          <button className='comment__like-button'></button>
        </div>
       ) 
      })}
    </section>
  )
}