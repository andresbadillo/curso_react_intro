import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <>
      {totalTodos === completedTodos && !loading && (
        <h1 className="TodoCounter">¡Felicidades, no tienes TODO's pendientes!</h1>
      )}
      {totalTodos !== completedTodos && (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
        </h1>
      )}
      {loading && (
        <h1 className="TodoCounter">
          Cargando...
        </h1>
      )}
    </>
  );
}

export { TodoCounter };