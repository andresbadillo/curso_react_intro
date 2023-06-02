import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
    item,
    sincronizedItem,
    loading,
    error,
  } = state;

  // ACTION CREATORS
  const onError = () => dispatch({ type: actionTypes.error });
  const onSucces = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        
        onSucces(parsedItem);
      } catch (error) {
        onError();
      }
    }, 1500);
  }, [sincronizedItem]);
    
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem,
  };
};

const initialState =({ initialValue }) => ({
  loading: true,
  error: false,
  sincronizedItem: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },  
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Estudiar inglés', completed: true },
//   { text: 'Entrenar pierna', completed: false },
//   { text: 'Hacer mercado', completed: true },
//   { text: 'Entrenar pecho-espalda', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));