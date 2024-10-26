import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const[username,setName]=useState("");
  const[mobile,setMobile]=useState("");
   const navigate=useNavigate();

   useEffect(()=>{
    axios.get('http://localhost:8080/home')
    .then(res=>{
      if(res.data.valid){
        setName(res.data.username);
        
      }
      else{
        navigate('/login')
      }
    })
    .catch(err=>console.log(err))
   },[])


  return (
    <div>Home {username}</div>
  )
}

export default Home