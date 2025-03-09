import React, { useState } from 'react';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, completed: false }]);
      setTaskName('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <div className="task-input">
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          placeholder="Enter a task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            onDelete={() => deleteTask(index)} 
            onToggle={() => toggleTaskCompletion(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
