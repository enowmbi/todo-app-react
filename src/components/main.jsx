import Tasks from "../components/tasks"
import NewTask from "../components/newtask"
import { useState } from "react"

const Main = ()=>{
    const [tasks, setTasks] = useState([])

    const handleAddTask =(e) =>{
        setTasks((prevTasks) => { return [...prevTasks, {id: 1, name: e, completed: false}]})
    }

    return(
        <main className="App-main">
          <NewTask addTask={handleAddTask}/>
          <Tasks tasks={tasks}/>
        </main>
    )
}
export default Main
