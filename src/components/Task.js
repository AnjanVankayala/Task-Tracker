import React from 'react';
import './Task.css';

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onClick={onToggle}>
      <span>{task.name}</span>
      <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
    </div>
  );
}

export default Task;
