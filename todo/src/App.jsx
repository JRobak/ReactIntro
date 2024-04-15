import { useState } from 'react'
import './App.css'
import { GetTasks } from './components/GetTasks'
import { AddTask } from './components/AddTask'

const statuses = [
  "to_do",
  "in_progress",
  "done"
]

class Task {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.status = statuses[0];
  }
}

const initialList = [
  new Task("zadanie1"), 
  new Task("zadanie2"), 
  new Task("zadanie3"), 
  new Task("zadanie4") 
]

function App() {
  const [tasks, setTasks] = useState(initialList);

  const addTask = (props) => {
    setTasks([...tasks, new Task(props.name)])
  }

  return (
    <div id="content">
      <h1>Zadania:</h1>
      <AddTask onAddTask={addTask}/>
      <ul>
        {tasks.map((task) => (
          <GetTasks key={task.id} task={task}/>
        ))}
      </ul>
    </div>
  )
}

export default App
