import { useEffect, useState } from 'react'
import { api } from '../../constants/fotos'
import { Comments } from './Comments'
import './FotoDescriptionWithComments.css'

export function FotoDescriptionWithComments(props: any) {

  const [comments, setComments] = useState([])

  async function getComments() {
    return await api.getComments().then(data => setComments(data.map((item: any) => item.body)))
  }

  useEffect(() => {
    getComments()    
  }, [])

  return (
    <section className='foto-description-with-comments'>
      <div className='description-block'>
        <div className='description-block__conatiner'>
          <div className='description-block__avatar-container'>
            <img className='description-block__avatar'/>
          </div>
          <div className='description-block__description-container'>
            <p className='description'><span className='user-name'>userName </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia, autem illum et accusantium recusandae suscipit rem ducimus. Vero, sint? Eaque quam voluptates laborum vitae? Reprehenderit adipisci sapiente nemo vero?</p>
            <span className='date'>13 ч.</span>
          </div>
        </div>

      </div>
      <Comments comments={comments}/>
     
    </section>
  )
}