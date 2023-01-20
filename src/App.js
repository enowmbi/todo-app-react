import Header from "./components/header"
import NewTask from "./components/new_task"
import Search from "./components/search"
import Tasks from "./components/tasks"
import Footer from "./components/footer"
import apiRequest from "./apiRequest"
import { useState, useRef, useEffect } from "react"
import { v4 } from "uuid"
import './App.css';

function App() {
    const BASE_URL = "http://localhost:3500/tasks"
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [searchText, setSearchText] = useState("")
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const newTaskRef = useRef()

    useEffect(()=>{
        const fetchTasks = async ()=>{
            try{
                const response = await fetch(BASE_URL)
                if(!response.ok) throw Error("Did not receive expected data")
                const fetchedTasks = await response.json()
                console.log("Fetched Tasks: ", fetchedTasks)
                setTasks(fetchedTasks)
                setFetchError(null)
            }catch(err){
                setFetchError(err.message)
            }finally{
                setIsLoading(false)
            }
        }

        fetchTasks()
    }, [])

    const handleSubmit = async (e)=>{
        console.log("submit button clicked", e)
        e.preventDefault()
        const myNewTask = {id: v4(), name: newTaskRef.current.value, completed: false }
        const newTasks = [...tasks, myNewTask]
        setTasks(newTasks)
        console.log("New task created upon submission of form: ", myNewTask)

        const createOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myNewTask)
        }

        const result = await apiRequest(BASE_URL, createOptions)
        if(result) setFetchError(result)

        newTaskRef.current.value = ""
        setNewTask(newTaskRef.current.value)
        newTaskRef.current.focus()
    }

    const handleChange =()=>{
      setNewTask(newTaskRef.current.value)
    }

    const handleDelete = async (id)=>{
        const filteredTasks = tasks.filter((task)=>task.id !== id)
        console.log("Deleting task with id: ", id)
        setTasks(filteredTasks)

        const deleteOptions = { method: 'DELETE' }

        const result = await apiRequest(`${BASE_URL}/${id}`, deleteOptions)
        if(result) setFetchError(result)
    }

    const handleCheckChanged = async (id)=>{
        console.log("checked changed for :", id) 
        const updatedTasks = tasks.map((task) =>{
            return task.id === id ? {...task, completed: (!task.completed)} : task
        })
        setTasks(updatedTasks)

        const task = updatedTasks.filter((task)=> task.id === id)

        const updateOptions ={
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: task[0].completed })
        }

        const result = await apiRequest(`${BASE_URL}/${id}`, updateOptions)
        if(result) setFetchError(result)

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
            {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
            { isLoading && <p>Loading ....</p>}
            { !fetchError && !isLoading && tasks.length ? (
                <Tasks 
                tasks={tasks.filter((task) =>{ return task.name.toLowerCase().includes(searchText.toLowerCase())})} 
                handleDelete={handleDelete}
                handleCheckChanged={handleCheckChanged}
                />): ( !isLoading && <h3>No tasks found !</h3> ) }
            </main>
            <Footer/>
        </div>
    )
}

export default App
