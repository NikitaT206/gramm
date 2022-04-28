import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Publication } from '../../types/publication'
import { UserName } from '../UserName/UserName'
import './FotoDescription.css'

export function FotoDescription(props: {publication: Publication}) {
  const user = useTypedSelector(state => state.user)

  const [showAllText, setShowAllText] = useState(false)
  let number = 30

  return (
    <div className='foto-description'>
      <p className='foto-description__text'>

        <span>{props.publication.owner?.name}</span>

        {props.publication.description.length > number && !showAllText ? (
          props.publication.description.slice(0, number)
        ) : (
          props.publication.description
        )}

        {props.publication.description.length > number && !showAllText ? (
          <button className='foto-description__else-button' onClick={() => setShowAllText(true)} type={'button'}> ... ещё</button>
        ) : ''}

      </p>
    </div>
  )
}