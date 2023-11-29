import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
const EditTask = () => {
  const [task, setTask] = useState({});
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Load task from localStorage based on id on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const selectedTask = storedTasks.find((t) => t.id === parseInt(id));
    setTask(selectedTask);
    setTaskName(selectedTask.name);
    setTaskDescription(selectedTask.description);
    setPriority(selectedTask.priority);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      name: taskName,
      description: taskDescription,
      priority,
    };

    const updatedTasks = JSON.parse(localStorage.getItem('tasks')).map((t) =>
      t.id === task.id ? updatedTask : t
    );

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Redirect to TaskList
    navigate('/');
  };

  return (
    <motion.div className="container"
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h1 className="heading">Edit Task</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <label>
          Task Description:
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Update Task</button>
      </form>
    </motion.div>
  );
};

export default EditTask;