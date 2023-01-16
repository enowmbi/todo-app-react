const NewTask =(props)=>{

  return(
      <div>
          <input type="text"/>
          <button onClick={props.addTask}>Add Task</button>
      </div>
  )
}

export default NewTask
