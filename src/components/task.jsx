const Task =(props)=>{
    return(
        <div className="App-task">
        <label>
            <input type="checkbox" checked={props.checked}/>
            {props.name}
        </label>
        </div>
    )
}
export default Task
