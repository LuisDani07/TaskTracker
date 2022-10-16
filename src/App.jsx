import TaskList from './TaskList';
import TaskForm from './TaskForm'
import {tasks as data} from './Task'
import {useEffect, useState} from 'react'
function App() {

  const [tasks, setTasks] = useState([])

useEffect(()=>{
setTasks(data)
}, [])

function createTask(taskTitle){
setTasks([...tasks, {
  title:taskTitle,
  id:tasks.length,
  description: "nueva tarea"
}])
}


  return (
    <>
            <TaskForm createTask={createTask}/>
             <TaskList tasks={tasks}/>
    </>

  )
}

export default App