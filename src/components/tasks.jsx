import Task from "../components/task"

const Tasks =({ tasks, handleDelete, handleCheckChanged })=>{

  return(
      <article>
          <h4>These are my tasks</h4>
                <ol>
                 {tasks.map((task) =>{
                     return(<li><Task 
                         key={task.id} 
                         name={task.name}
                         completed={task.completed}
                         handleDelete={()=>handleDelete(task.id)}
                         handleCheckChanged={()=>handleCheckChanged(task.id)}
                     /></li>)
                 })}
               </ol>
      </article>
  )
}
export default Tasks
