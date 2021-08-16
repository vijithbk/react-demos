import logo from './logo.svg';
import React, { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: '30th Aug 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: '1st Sept 2021',
      reminder: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: '30th Sept 2021',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    console.log(id)
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    console.log(id)
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  return (
    <div className="container">
      <Header title="Task tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
      }
    </div>
  );
}

export default App;
