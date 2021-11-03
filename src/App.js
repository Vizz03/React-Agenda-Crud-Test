import './App.css';
import { Header, Input, TaskList} from './components';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  FaDownload} from 'react-icons/fa';
import { CSVLink } from "react-csv";
import CSVReader from 'react-csv-reader'


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

function App() {

  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false);

  const handleImport = (data) => {
    console.log(data);
   alert(' ID '+ data[0].id + " Agenda " + data[0].text + " from " + data[0].start  + " to " +  data[0].end)
  }
  // toggle Add Agenda
  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  // add Agenda
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  

  // delete Agenda
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header showAddTask={showAddTask} toggleAddTask={toggleAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            {
              showAddTask
                ? <Input addTask={addTask} />
                : null
            }
            {
              tasks.length > 0
                ? <TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
                : <h3 style={{ color: 'gray' }}>No Tasks!</h3>
            }
          </>
        )} />
     <div style={{ marginLeft: 10, padding : 10}}>
     <FaDownload/> <CSVLink data={tasks}>Export Agenda</CSVLink>
       </div>
       <div style={{ marginLeft: 10, padding : 10}}>
   
       <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Import Agenda in CSV format"
      onFileLoaded={handleImport}
      parserOptions={papaparseOptions}
    />
    <br/>
    <h4>For Fuctional Demo Purposes, Please import the Agenda you exported</h4>
   
  </div>
       </div>
          
      </div>
    </Router>
  );
}

export default App;
