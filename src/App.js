import Header from "./components/header"
import Tasks from "./components/tasks"
import Footer from "./components/footer"
import { useState, useRef } from "react"
import { v4 } from "uuid"
import './App.css';

function App() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const newTaskRef = useRef()

    const handleSubmit =(e)=>{
      e.preventDefault()
      const myNewTask = {id: v4(), name: newTaskRef.current.value, completed: false }
      const newTasks = [...tasks, myNewTask]
      setTasks(newTasks)
      console.log("New task created upon submission of form: ", myNewTask)
      newTaskRef.current.value = ""
      setNewTask(newTaskRef.current.value)
      newTaskRef.current.focus()
    }

    const handleChange =()=>{
      setNewTask(newTaskRef.current.value)
    }

    const handleDelete =(id)=>{
        const filteredTasks = tasks.filter((task)=>task.id !== id)
        console.log("Deleting task with id: ", id)
        setTasks(filteredTasks)
    }
    
    return(
        <div className="App">
            <Header/>
            <main>
                <form className="New-Task" onSubmit={handleSubmit}>
                    <input type="text" ref={newTaskRef} value={newTask} onChange={handleChange}/>
                    <button className="Add-button" onClick={handleSubmit}>+</button>
             </form>
            { tasks.length ? (<Tasks tasks={tasks} handleDelete={handleDelete} />): (<h3>No tasks found !</h3>) }
            </main>
            <Footer/>
        </div>
    )
}

export default App
