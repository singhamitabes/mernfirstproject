import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function EditToDo({ editId }) {
    const [input, setinput] = useState(editId.item.todotask)
    const navigate = useNavigate()
    // console.log({editId.item.todotask})
     console.log(input)
    function handleInputChange(e) {
        setinput(e.target.value)
    }
    async function handleAddTask(id) {
        try {
            const response = await axios.put(`http://localhost:4000/${id}`, { todotask: input });
            console.log(response.data);
            navigate("/read")
            // setCurrentTodo(response.data.todotask)
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="App">
                <h1>Edit To-Do List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={input}
                        onChange={handleInputChange}
                    />
                   {
                    (editId.item.todotask!==input)?<button onClick={()=>handleAddTask(editId.item._id)}>Add</button> : ""
                   }
                </div>
            </div>
        </>
    )
}
