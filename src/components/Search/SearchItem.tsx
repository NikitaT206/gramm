import './SearchItem.css'

export function SearchItem({foto}: any) {
  return (
    <div className='search-item'>
      <img className='search-item__image' src={foto.image}/>
    </div>
  )
}