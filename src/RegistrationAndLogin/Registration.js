import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Registration = () => {
const[values,setValues]=useState({
    username:'',
    email:'',
    mobile:'',
    password:''

})
const navigate=useNavigate();

const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
}
function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/adduser',values)
        .then(res => {
            console.log(res);
            navigate('/login');
        })
        .catch(err => console.log(err));
}
  return (
    <div className='d-flex justify-content-center bg-primary vh-100 align-items-center'>
        <div className='bg-white rounded p-3 w-25 h-80'>
        <h2>Registration</h2>
           <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='username'>Username:</label>
                 <input
                  type="text" 
                  placeholder='Username' 
                  name='username' 
                  className='form-control rounded-0'
                  onChange={handleInput}
                 />
              </div>
              <div className='mb-3'>
                 <label htmlFor='email'>Email:</label>
              <input
               type="email" 
               placeholder='Email' 
               name='email' 
               className='form-control rounded-0'
               onChange={handleInput}
              />
              </div>
              <div className='mb-3'> 
                <label htmlFor='mobile'>Mobile No:</label>
              <input
               type="number" 
               placeholder='Mobile No.' 
               name='mobile' 
               className='form-control rounded-0'
               onChange={handleInput}
               />
              </div>
              <div className='mb-3'> 
                <label htmlFor='password'>Password:</label>
              <input 
              type="password" 
              placeholder='Password' 
              name='password' 
              className='form-control rounded-0'
              onChange={handleInput}
              />
              </div>
              <button type='submit' className='btn btn-success w-100 rounded'>Sign Up</button>
              <h6>Already Registered</h6>
              <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</Link>

           </form>
        </div>
        
        </div>
  )
}

export default Registration
