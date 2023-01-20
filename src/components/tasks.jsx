import Task from "../components/task"

const Tasks =({ tasks, handleDelete, handleCheckChanged })=>{

  return(
      <article>
          <h2>These are my tasks</h2>
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
