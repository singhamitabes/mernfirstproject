import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import "./index.css"
import { Link } from 'react-router-dom';

export default function CreateToDo() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setFormData(event.target.value);
    };

    function handleAddTask(e){
        try {
            axios.post('http://localhost:4000/todo', { todotask: formData })
                .then(response => {
                    console.log('Data successfully submitted:', response.data);
                    setFormData("")
                    navigate("/read")
                })
                .catch(error => {
                    alert(error.response.data)
                    console.error('Error submitting data:', error.response.data);

                });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="App">
                <h1>To-Do List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={formData}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddTask}>Add</button>
                </div>
                <Link to="/read">Read All ToDos</Link>
            </div>

        </>
    )
}
