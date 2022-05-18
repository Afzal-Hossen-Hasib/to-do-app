import React from 'react';
import './AddTask.css'

const AddTask = () => {
    return (
        <div className='container'>
            <h1 className='text-center user-title mt-5'>Add Task Here</h1>

            <div className='add-div'>
                <input className='w-50 mx-auto d-block' type="text" name="name" id="" placeholder='Name' /> <br />
                <input className='mt-3 w-50 mx-auto d-block' name="description" id="" cols="25" rows="5" placeholder='Description'></input> <br />

                <button className='btn btn-secondary mx-auto d-block'>Add Task</button>
            </div>
        </div>
    );
};

export default AddTask;