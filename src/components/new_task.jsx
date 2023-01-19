import { useState } from "react"

const NewTask =({ newTask, handleSubmit, handleChange })=>{

return(
    <form className="New-Task" onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e) =>handleChange(e)}/>
        <button className="Add-button">+</button>
    </form>
)
}

export default NewTask
