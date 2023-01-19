const Task =(props)=>{
    return(
        <div className="App-task">
        <label>
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            {props.name}
        </label>
        </div>
    )
}
export default Task
