import './FotoItem.css'
import { HeadingBlock } from './HeadingBlock'
import { InfoBlock } from './InfoBlock'

export function FotoItem({item}: any) {

  return (
    <div className='foto-item'>
      <HeadingBlock/>
      <div className='foto-item__foto-container'>
        <img className='foto-item__image' src={item.image}/>
      </div>
      <InfoBlock/>
    </div>
  )
}