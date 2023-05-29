import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// const TodoContext = React.createContext();

function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => !!todo.completed).length; /* !! - devuelve un boleano */
    const totalTodos = todos.length;
    
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    }
    
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        sincronizeTodos,
    };
}

export { useTodos };