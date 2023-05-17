import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log(`Buscando TODOs de ${searchValue}`);

  return (
    <input 
      placeholder='Buscar TODO' 
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { TodoSearch };