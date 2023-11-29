import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskList.css'
import { motion } from 'framer-motion';
const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!taskName.trim()) {
      alert('Task name is required');
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority,
      dueDate,
      completed: false,
    };

    // Save task to localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...storedTasks, newTask]));

    // Redirect to TaskList
    navigate('/');
  };

  return (
    <motion.div className='container'
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h1 className='heading'>Add Task</h1>
      <form className='form' onSubmit={handleSubmit}>


        <input type="text" placeholder='Task Name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <textarea
        placeholder='Description'
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <span>Set Due Date</span>
        <input type='date' onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
        <label>
          Priority : 
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </motion.div>
  );
};

export default AddTask;