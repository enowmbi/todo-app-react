const Task =({ completed, name, handleDelete, handleCheckChanged })=>{
    return(
        <div className="App-task">
        <label>
            <input 
               type="checkbox" 
               checked={completed} 
               onChange={handleCheckChanged} 
            />
            {name}
        </label>
        <button onClick={handleDelete}> Delete </button>
        </div>
    )
}
export default Task
