// src/components/TodoApp.js
import React, { useState, useEffect } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add a task
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  // Delete a task by index
  const deleteTask = (indexToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );
  };

  // Toggle completion status
  const toggleCompletion = (indexToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <h5>shaik mustaq</h5>
      <p className="instruction">Click on a task to mark it as completed.</p>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={handleInputChange}
          aria-label="New Task"
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              className={`todo-item ${task.completed ? 'completed' : ''}`}
              key={index}
              aria-labelledby={`task-${index}`}
            >
              <span
                id={`task-${index}`}
                onClick={() => toggleCompletion(index)}
                role="button"
                tabIndex="0"
                aria-checked={task.completed}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)} aria-label={`Delete task ${index + 1}`}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No tasks available. Add a new task to get started!</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
