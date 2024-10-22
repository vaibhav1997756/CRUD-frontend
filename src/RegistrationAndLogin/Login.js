// import React,{useState} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import axios from 'axios'

// const Login = () => {

//     const[values,setValues]=useState({
//         username:'',
//         password:''
    
//     })
//     const navigate=useNavigate();
    
//     const handleInput=(event)=>{
//         setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         axios.post('http://localhost:8080/loginuser',values)
//             .then(res => {
//                 if(res.data.Login){
//                 // console.log(res);
//                 navigate('/home');
//                 }
//                 else{
//                     alert('no-record')
//                 }
//             })
//             .catch(err => console.log(err));
//     }

    
//   return (
//     <div className='d-flex justify-content-center bg bg-primary vh-100'>
//     <div className='bg-white rounded p-3 w-25 p-2'>
//     <h2>Log In</h2>
//        <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='username'>Username:</label>
//              <input
//               type="text" 
//               placeholder='Username' 
//               name='username' 
//               className='form-control rounded-0'
//               onChange={handleInput}
//              />
//           </div>
        
//           <div className='mb-3'> 
//             <label htmlFor='password'>Password:</label>
//           <input 
//           type="password" 
//           placeholder='Password' 
//           name='password' 
//           className='form-control rounded-0'
//           onChange={handleInput}
//           />
//           </div>
//           <button type='submit' className='btn btn-success w-100 rounded'>Log In</button>
//           <h2>TERMS AND CONDITIONS</h2>
//           <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</Link>

//        </form>
//     </div>
    
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value  // Remove the brackets around event.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/loginuser', values)
            .then(res => {
                if (res.data.Login) {
                    navigate('/home');
                } else {
                    alert('No record found');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center bg bg-primary vh-100">
            <div className="bg-white rounded p-3 w-25 p-2">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            className="form-control rounded-0"
                            onChange={handleInput}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={handleInput}
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded">Log In</button>
                    <h2>TERMS AND CONDITIONS</h2>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
