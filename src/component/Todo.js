import React from 'react';
import './Todo.css'

const Todo = () => {
    return (
        <div className='main-div'>
            <div>
            <h1 className='title'>Add Your Task Here</h1>
            </div>
            <div className='add-task'>
                <label htmlFor="name" className='input-title'>Task Name:</label> <br />
                <input type="text" name="name" placeholder='Task Name' id="" /> <br />
                <label htmlFor="description" className='input-title'>Description:</label> <br />
                <textarea type="text" name="description" placeholder='Description' id="" className='textarea-description' /> <br />
                <button className='input-button'>Add Task</button>
            </div>
            
        </div>
    );
};

export default Todo;