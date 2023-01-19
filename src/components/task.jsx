const Task =({completed, name, handleDelete, key })=>{
    return(
        <div className="App-task">
        <label>
            <input type="checkbox" checked={completed} />
            {name}
        </label>
        <button onClick={handleDelete}> Delete </button>
        </div>
    )
}
export default Task
