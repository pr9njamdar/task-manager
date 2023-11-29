import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import { motion, AnimatePresence } from 'framer-motion';
function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" exact element={<TaskList/>} />
          <Route path="/add" element={<AddTask/>} />
          <Route path="/edit/:id" element={<EditTask/>} />
        </Routes>
        </AnimatePresence>
        <a style={{color:'#FFF',position:'absolute',right:'45vw'}} href='https://github.com/pr9njamdar/task-manager'>Made with ❤️ by Pr9</a>
      </div>
    </Router>
  );
}

export default App;
