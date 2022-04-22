import { useEffect, useState } from 'react'
import './FotoDescription.css'

export function FotoDescription() {
  const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis neque? Itaque fugit molestias porro. Obcaecati veniam, nulla quas, error similique maxime atque, quod magnam placeat quisquam quia. Suscipit, et.'

  const [text, setText] = useState(description)
  
  const [showElseButton, setShowElseButton] = useState(false)
  const [showAllText, setShowAllText] = useState(false)
  let number = 100

  useEffect(() => {
    if (!showAllText) {
      if (text.length > number) {
        setText(text.slice(0, number))
        setShowElseButton(true)
        setShowAllText(true)
      }
    }
  }, [text, showElseButton])

  function showAllDescription() {
    setText(description)
    setShowElseButton(false)
  }
  
  return (
    <div className='foto-description'>
      <p className='foto-description__text'>
        <span className='foto-description__owner'>Owner </span>
        {text}
        {showElseButton ? <button className='foto-description__else-button' onClick={showAllDescription}> ... ещё</button> : ''}
      </p>
    </div>
  )
}