import Task from "../components/task"

const Tasks =({ tasks, handleDelete, handleCheckChanged })=>{

  return(
      <article>
          <h2>{tasks.length} {tasks.length === 1 ? "Task" : "Tasks" }</h2>
                 {tasks.map((task) =>{
                     return(<Task 
                         key={task.id} 
                         name={task.name}
                         completed={task.completed}
                         handleDelete={()=>handleDelete(task.id)}
                         handleCheckChanged={()=>handleCheckChanged(task.id)}
                     />)
                 })}
      </article>
  )
}
export default Tasks
