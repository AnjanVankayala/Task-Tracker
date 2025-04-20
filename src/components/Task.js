import React from 'react';
import './Task.css';

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} >
      <div>
      <span onClick={onToggle}><i
          style={{ fontSize: '24px' }}
          className={`fa ${task.completed ? 'fa-check' : 'fa-times'}`}
        ></i></span>
      <span>{task.name}</span>
      </div>
      <span onClick={(e) => { e.stopPropagation(); onDelete(); }}>
      <i style={{ fontSize: '24px' }} className="fa del">&#xf014;</i>
      </span>
    </div>
  );
}

export default Task;
