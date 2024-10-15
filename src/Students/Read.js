// import axios from 'axios';
// import React, { useEffect,useState } from 'react'
// import { useParams,Link } from 'react-router-dom'

// const Read = () => {
//     const {id}=useParams();
//     const [usercrud, setCrud] = useState([]);
//     useEffect(()=>{
//         axios.get(`http://localhost:8080/read/`+id)
//         .then(res=>{
//             console.log(res);
//             setCrud(res.data);
//         })
//         .catch(err=>console.log(err))
//     },[])
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//         <div className='w-50 bg-white rounded p-3'>
//             <h3>Student Detail</h3>
//             <h3>{usercrud[0].ID}</h3>
//             <h3> {usercrud[0].name}</h3>
//             <h3>{usercrud[0].email}</h3>
//       <Link to='/' className="bg bg-primary">Back</Link>
//       <button className='bg bg-primary'>Edit</button>
//         </div>


//     </div>
//   )
// }

// export default Read





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Read = () => {
  const { id } = useParams();
  const [usercrud, setCrud] = useState(null); // Initialize as null for conditional rendering
  
  useEffect(() => {
    axios.get(`http://localhost:8080/read/$`+id)
      .then(res => {
        console.log(res);
        setCrud(res.data[id]); // Assuming res.data is the user object
      })
      .catch(err => console.log(err));
  }, []); // Add 'id' as a dependency for the effect
  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h3>Student Detail</h3>
        {usercrud ? (
          <>
            <h3>ID: {usercrud.id}</h3>
            <h3>Name: {usercrud.name}</h3>
            <h3>Email: {usercrud.email}</h3>
          </>
        ) : (
          <p>Loading...</p> // Conditional rendering while data is loading
        )}
        <Link to='/' className="btn btn-primary">Back</Link>
        <button className='btn btn-primary'>Edit</button>
      </div>
    </div>
  );
};

export default Read;
