import React, { useState } from 'react';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Take internship test', completed: false },
  { id: 2, title: 'buy groceries', completed: true },
   { id: 3, title: 'Finish Chapter -1 database', completed: true }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>

      <div className="input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="list">
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(task.id)}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
