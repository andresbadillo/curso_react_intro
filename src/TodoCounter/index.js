import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  // return (
  //   <h1 className='TodoCounter'>
  //     Has completado <span>{completed}</span> de <span>{total}</span> TODO's
  //   </h1>
  // )
  return (
    <>
      {total === completed && (
        <h1 className="TodoCounter">¡Felicidades, no tienes tareas pendientes!</h1>
      )}
      {total !== completed && (
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODO's
        </h1>
      )}
    </>
  );
}

export { TodoCounter };