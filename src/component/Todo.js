import React from 'react';
import './Todo.css'

const Todo = () => {
    return (
        <div className='main-div'>
            <div>
            <h1 className='title'>Add Your Task Here</h1>
            </div>
            <div className='add-task'>
                <input type="text" name="name" placeholder='Task Name' id="" />
                <input type="text" name="name" placeholder='Description' id="" />
            </div>
            <button>Add Task</button>
        </div>
    );
};

export default Todo;