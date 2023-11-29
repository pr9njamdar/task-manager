import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css'
import './TaskItem.css'

import { motion , AnimatePresence} from 'framer-motion';
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5; // Adjust the number of tasks per page as needed
  
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    }, []);
  
    const handleSortToggle = () => {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
  
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { low: 0, medium: 1, high: 2 };
      const compareValue = priorityOrder[a.priority] - priorityOrder[b.priority];
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });
  
    // Pagination logic
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = sortedTasks.slice(indexOfFirstTask, indexOfLastTask);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const calculateProgress = () => {
        if (tasks.length === 0) {
          return 0; // No tasks, progress is 0%
        }
    
        const completedTasks = tasks.filter((task) => task.completed);
        return (completedTasks.length / tasks.length) ;
      };
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="container"
      >
        <h1 className="heading">Task List</h1>
        <div className="progress-bar-container">
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${calculateProgress()*300}px` }}
        transition={{ duration: 0.5 }}
         className="progress-bar" style={{ width: `${calculateProgress()*300}px` }}>{Math.round(calculateProgress()*100)} % completed</motion.div>

        
      </div>
        <div className="sort-button-container">
          <button className="btn fn-btn blue" onClick={handleSortToggle}>
            Sort by Priority {sortOrder === 'asc' ? '↓' : '↑'}
          </button>
        </div>
  
        <ul className="list">
          <AnimatePresence initial={false}>
            {currentTasks.map((task) => (
              <motion.li
                key={task.id}
                whileHover={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeIn',
                }}
              >
                <Task setTasks={setTasks} tasks={tasks} task={task} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
  
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(sortedTasks.length / tasksPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`${currentPage === index + 1 ? 'active' : ''} blue`}
            >
              
            </button>
          ))}
        </div>
  
        <Link to="/add" className="add-button">
          <button className="btn">Add Task</button>
        </Link>
      </motion.div>
    );
  };

const Task = ({ task, tasks, setTasks }) => {

    const [expand, setExpand] = useState(false)
    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleToggle = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (<div className={`task-item ${expand ? 'expand' : ''}`} >

        <motion.input checked={task.completed}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onChange={() => handleToggle(task.id)} type='checkbox' />
        <span onClick={() => setExpand(!expand)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
        </span>
        {expand ?
            <div className="expanded-details">
                <div>Description : {task.description}</div>
                <div>Due Date : {task.dueDate}</div>
            </div> :
            <></>

        }

        <button className="btn fn-btn" onClick={() => handleDelete(task.id)}>Delete</button>
        <Link to={`/edit/${task.id}`}>
            <button className='btn fn-btn'>Edit</button>
        </Link>

    </div>)
}

export default TaskList;