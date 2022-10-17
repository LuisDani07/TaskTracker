import {createContext,useState, useEffect} from 'react';
import {tasks as data} from '../data/Task'
export const TaskContext=createContext()
export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    setTasks(data)
    }, [])
  
function createTask(task){
  setTasks([...tasks, {
    title:task.title,
    id:tasks.length,
    description: task.description
  }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task=>task.id !==taskId))
  }

  return (
    <>
    <h1>componente context</h1>
       <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
       }}>
        {props.children}
       </TaskContext.Provider>
    </>
  )
}

