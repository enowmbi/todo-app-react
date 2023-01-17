import {useRef} from "react"

const NewTask =(props)=>{

    const taskNameRef = useRef()

    const addTask =()=>{
        if(taskNameRef.current.value === "") return
        props.addTask(taskNameRef.current.value)
        taskNameRef.current.value =null
    }

    return(
        <div>
            <input type="text" ref={taskNameRef} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default NewTask
