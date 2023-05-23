import React from 'react';
import './TodosLoading.css';


function TodosLoading() {
  return (
    <div className='container'>
      <span className='loader'></span>
      <p>Cargando...</p>
    </div>
  )
}

export { TodosLoading }