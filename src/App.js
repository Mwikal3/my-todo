import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const editTodo = (index, newTask) => {
    const newTodos = [...todos];
    newTodos[index].task = newTask;
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todays tasks</h1>
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;