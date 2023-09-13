import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <h1 className="TodoCounter">
      HAS COMPLETADO <span>{completedTodos}</span> DE <span>{totalTodos}</span> TODAS LAS TAREAS
    </h1>
  );
}

export { TodoCounter };
