import Header from "./components/header"
import NewTask from "./components/new_task"
import Search from "./components/search"
import Tasks from "./components/tasks"
import Footer from "./components/footer"
import { useState, useRef, useEffect } from "react"
import { v4 } from "uuid"
import './App.css';

function App() {
    const BASE_URL = "http://localhost:3500/tasks"
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [searchText, setSearchText] = useState("")

    const newTaskRef = useRef()

    useEffect(()=>{
        const fetchTasks = async ()=>{
            try{
                const response = await fetch(BASE_URL)
                const fetchedTasks = await response.json()
                console.log("Fetched Tasks: ", fetchedTasks)
                setTasks(fetchedTasks)
            }catch(err){
                console.log(err.stack)
            }
        }

        fetchTasks()
    }, [])

    const handleSubmit =(e)=>{
    console.log("submit button clicked", e)
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

    const handleCheckChanged =(id)=>{
      console.log("checked changed for :", id) 
      const updatedTasks = tasks.map((task) =>{
         return task.id === id ? {...task, completed: (!task.completed)} : task
      })
     setTasks(updatedTasks)
     console.log("updated tasks: ", updatedTasks)
    }

    const handleSearchTextChange =(e)=>{
        setSearchText(e.target.value)
    }

    
    return(
        <div className="App">
            <Header/>
            <main>
            <NewTask
              newTaskRef={newTaskRef} 
              value={newTask} 
              onChange={handleChange}
              handleSubmit={handleSubmit} 
            />
            <Search 
              handleSearchTextChange={handleSearchTextChange}
              value={searchText}
            />
            { tasks.length ? (
                <Tasks 
                tasks={tasks.filter((task) =>{ return task.name.toLowerCase().includes(searchText.toLowerCase())})} 
                handleDelete={handleDelete}
                handleCheckChanged={handleCheckChanged}
                />): (<h3>No tasks found !</h3>) }
            </main>
            <Footer/>
        </div>
    )
}

export default App
