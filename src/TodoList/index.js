import React from 'react'
import './TodoList.css'

function TodoList({ 
  children, 
  error, 
  loading, 
  totalTodos,
  onError, 
  onLoading, 
  onEmptyTodos,
  onEmptySearchResults,
  searchedTodos,
  searchText,
  render
}) {
  const renderFunc = children || render;

  return (
    <section>
    {error && onError()}
    {loading && onLoading()}
    {(!loading && !totalTodos) && onEmptyTodos()}
    {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}
    {(!loading && !error) && searchedTodos.map(renderFunc)}
      <ul className='TodoList'>
        {children}
      </ul>
    </section>
  )
}

export { TodoList };