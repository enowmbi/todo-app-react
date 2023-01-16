import Tasks from "../components/tasks"
import NewTask from "../components/newtask"

const Main = ()=>{
    const handleAddTask =() =>{
      alert('AddTask has been clicked')  
    }

    return(
        <main className="App-main">
          <NewTask addTask={() => handleAddTask()}/>
          <Tasks/>
        </main>
    )
}
export default Main
