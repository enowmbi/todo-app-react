import { FaTrashAlt } from "react-icons/fa"

const Task =({ completed, name, handleDelete, handleCheckChanged })=>{
    return(
        <div className="task">
        <label>
            <input 
               type="checkbox" 
               checked={completed} 
               onChange={handleCheckChanged}
            />
            <span>{name}</span>
        </label>
        <FaTrashAlt
            role="button" 
            aria-label="Add task" 
            onClick={handleDelete}
        />
        </div>
    )
}
export default Task
