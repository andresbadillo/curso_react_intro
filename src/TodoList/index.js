import React from 'react'
import './TodoList.css'

function TodoList({ 
  children, 
  error, 
  loading, 
  onError, 
  onLoading, 
  onEmptyTodos, 
  searchedTodos, 
  render
}) {
  return (
    <div>
    {error && onError()}
    {loading && onLoading()}
    {(!loading && searchedTodos.length === 0) && onEmptyTodos()}
    {searchedTodos.map(render)}
      <ul className='TodoList'>
        {children}
      </ul>
    </div>
  )
}

export { TodoList };