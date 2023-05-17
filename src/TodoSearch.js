import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  return (
    <input 
      placeholder='Buscar TODO' 
      className='TodoSearch'
      onChange={(event) => {
        console.log('TodoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  )
}

export { TodoSearch };