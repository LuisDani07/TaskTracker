import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const { tasks}=useContext(TaskContext)
   
if(tasks.length===0){
    return <h1>No hay tareas aún</h1>
}

  return (
    <>
        {
            tasks.map(task=>(
             <TaskCard key={task.id} task={task}/>
                ))
        }
    </>
  )
}

export default TaskList