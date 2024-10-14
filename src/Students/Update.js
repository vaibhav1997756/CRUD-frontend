import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch the existing data when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8080/usercrud/${id}`)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/update/${id}`, { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
                    <button className='btn btn-success' type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;

