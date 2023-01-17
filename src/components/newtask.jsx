import {useRef} from "react"

const NewTask =(props)=>{

    const taskNameRef = useRef()

    const addTask =()=>{
        props.addTask(taskNameRef.current.value)
        taskNameRef.current.value =""
    }

    return(
        <div>
            <input type="text" ref={taskNameRef} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default NewTask
