import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Responder a la SSPD', completed: false },
  { text: 'Estudiar inglés', completed: true },
  { text: 'Enviar correo', completed: true },
  { text: 'Entrenar pierna', completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={6} total={11}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
