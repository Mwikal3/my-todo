import React, { useState } from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newTask);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.task}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => toggleComplete(index)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
