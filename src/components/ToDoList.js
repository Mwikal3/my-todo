import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
