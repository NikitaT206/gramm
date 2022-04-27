import './SearchInput.css'

export function SearchInput() {
  return (
    <div className='search-input-container'>
      <input className='search-input' type={'search'} placeholder='Поиск'/>
    </div>
    
  )
}