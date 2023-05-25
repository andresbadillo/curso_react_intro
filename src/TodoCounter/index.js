import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, }) {
  return (
    <>
      {totalTodos === completedTodos && (
        <h1 className="TodoCounter">¡Felicidades, no tienes TODO's pendientes!</h1>
      )}
      {totalTodos !== completedTodos && (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
        </h1>
      )}
    </>
  );
}

export { TodoCounter };