import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Fetch all todos from the backend
    axios.get('/api/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addTodo = () => {
    // Create a new todo and add it to the state and database
    axios.post('/api/todos', { text: newTodo })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateTodo = (id, completed) => {
    // Update the completion status of a todo
    axios.put(`/api/todos/${id}`, { completed: !completed })
      .then((response) => {
        const updatedTodos = todos.map((todo) =>
          todo._id === id ? { ...todo, completed: response.data.completed } : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteTodo = (id) => {
    // Delete a todo from the state and database
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo._id !== id);
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              className={todo.completed ? 'completed' : ''}
              onClick={() => updateTodo(todo._id, todo.completed)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
