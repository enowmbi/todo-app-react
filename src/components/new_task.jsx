import { FaPlus } from "react-icons/fa"

const NewTask =({ newTask, handleSubmit, handleChange, newTaskRef })=>{

return(
    <form className="new-task" onSubmit={handleSubmit}>
        <input
          ref={newTaskRef}
          type="text"
          value={newTask} 
          onChange={(e) =>handleChange(e)}
        />
        <button className="new-task-button" onClick={handleSubmit}><FaPlus /></button>
    </form>
)
}

export default NewTask
