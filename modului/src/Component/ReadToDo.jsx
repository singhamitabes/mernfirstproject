import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Read.css"
import { Link } from 'react-router-dom';



export default function ReadToDo({seteditId}) {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:4000/todo')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [data]);

    async function handleDeleteTask(id) {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                const response = await axios.delete(`http://localhost:4000/${id}`);
                console.log(response.data);
                console.log("Item deleted.");
            } catch (error) {
                console.error(error);
            }

        } else {
            // Code to execute if the user clicks "Cancel"
            console.log("Deletion cancelled.");
        }
    }
    function handleEditTask(val) {
        seteditId(val)
    }

    return (
        <>
            <div className="TodoList">
                <h1>To-Do List</h1>
                <ul className="tasks-list">
                    {data.map((item, index) => (
                        <li key={item._id} className="task-item">
                            <span className="task-text">{item.todotask}</span>
                            <Link to='/edit'>
                                <button
                                    className="edit-button"
                                    onClick={() => handleEditTask({item})}
                                >
                                    Edit
                                </button>
                            </Link>
                            <button
                                className="delete-button"
                                onClick={() => handleDeleteTask(item._id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <Link to="/">Add New Task</Link>
            </div>

        </>
    )
}
