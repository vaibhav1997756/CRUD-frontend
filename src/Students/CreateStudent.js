import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/create', { name, email,phone })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter Name' 
                            className='form-control'
                            onChange={e => setName(e.target.value)} 
                            value={name}
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            className='form-control'
                            onChange={e => setEmail(e.target.value)} 
                            value={email}
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='phone'>Email</label>
                        <input 
                            type="number" 
                            placeholder='Enter Phone No.' 
                            className='form-control'
                            onChange={e => setPhone(e.target.value)} 
                            value={phone}
                            required
                        />
                    </div>
                    <button className='btn btn-success' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateStudent;
