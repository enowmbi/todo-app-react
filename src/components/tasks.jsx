import Task from "../components/task"
import { useState } from "react"

const Tasks =(props)=>{

    const handleChange=(id)=>{
    }

  return(
      <div>
          <h4>These are my tasks</h4>
          {props.tasks.map((task)=>{
              return(<Task 
                  key={task.id} 
                  name={task.title} 
                  checked={task.complete}
                  onChange={handleChange(task.id)}/>
              )
          })}
          <hr/>
      </div>
  )
}
export default Tasks
