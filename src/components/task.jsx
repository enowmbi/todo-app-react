const Task =({completed, name })=>{
    return(
        <div className="App-task">
        <label>
            <input 
              type="checkbox" 
              checked={completed} 
              />
            {name}
        </label>
        </div>
    )
}
export default Task
