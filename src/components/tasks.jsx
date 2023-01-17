import Task from "../components/task"

const Tasks =(props)=>{
  return(
      <div>
          <h4>These are my tasks</h4>
          {props.tasks.map((task)=>{
              return(<Task key={task.id} name={task.name} checked={task.complete}/>)
          })}
          <hr/>
      </div>
  )
}
export default Tasks
