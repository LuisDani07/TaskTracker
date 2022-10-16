
function TaskCard({task, deleteTask}) {

  function eliminar(){
   alert(task.id)
  }
  return (
    <div >
    <h1>{task.title}</h1>
  <p>{task.description}</p> 
  <button onClick={function(){deleteTask(task.id)}}>Eliminar</button>
   </div>
  )
}

export default TaskCard