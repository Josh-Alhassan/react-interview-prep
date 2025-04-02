import React, { useState, useEffect } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Feature 1:  Add a New Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Prevent empty todos

    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('')
  };

  // Feature 2:  Delete a Todo - deleting a todo by it's index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Feature 3: Toggle Todo Completion
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

//   Feature 5: Persist Todos in `localStorage`

// Load todos from localStorage on mount
useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
}, []);

// Save todos to localStorage whenever they change
useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])


  return (
    <div style={{ margin: '20px' }}>
      <h1>Todo App</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      {/* Update the todo list: Unordered list of tasks */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
