import React, { useState  } from 'react';
import TodoFormHooks from './ToDoForm_Hooks'
import TodoList from './TodoList_Hooks';


const HooksAll = () => {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="Hooks">
      <TodoFormHooks 
        saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
      }}
      />
      <TodoList 
        todos={todos} 
        deleteTodo={todoIndex => {
          const newTodos = todos
            .filter((_, index) => index !== todoIndex);
        
          setTodos(newTodos);
        }}
      />
   </div>
  );
};

export default HooksAll;