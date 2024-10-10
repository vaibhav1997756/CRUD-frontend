// import React,{useEffect,useState} from 'react'
// import {Link} from 'react-router-dom';
// import axios from 'axios'

// const Crud = () => {
   

//     const [crud,setCrud]=useState([]);
//     useEffect(()=>{
//      axios.get('http://localhost:8080/')
//         .then(res => setCrud(res.data))
//         .catch(err =>console.log(err));
  
//     },[])
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//         <div className='w-50 bg-white rounded'>
//             <Link to='/create' className='btn btn-success'>Add +</Link>
//            <table className='table'>
//                <thead>
//                 <tr>
//                      <th>Name</th>
//                      <th>Email</th>
//                      <th>Action</th>
//                      </tr>
//                </thead>
//                <tbody>
//                     {
//                         crud.map((data,i)=>(
//                             <tr key={i}>
//                                 <td>{data.name}</td>
//                                 <td>{data.email}</td>
//                                 <td>
//                                     <button className='btn btn-primary'>Update</button>
//                                     <button className='btn btn-danger'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                </tbody>
//            </table>
//         </div>
//     </div>
//   )
// }

// export default Crud



// import React, { useEffect, useState } from 'react';
// //import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Crud = () => {
//     const [usercrud, setCrud] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/') // Ensure the correct API endpoint
//             .then(res => setCrud(res.data))
//             .catch(err => console.log(err));
//     }, [])

//     const handleUpdate = (id) => {
//         // Add logic for updating the item
//         console.log(`Update item with id: ${id}`);
//     };

//     const handleDelete = (id) => {
//         // Add logic for deleting the item
//         console.log(`Delete item with id: ${id}`);
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <button  className="btn btn-success mb-3">Add +</button>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {usercrud.map((data) => (
//                             <tr key={data.id}>
//                                 <td>{data.name}</td>
//                                 <td>{data.email}</td>
//                                 <td>
//                                     <button className="btn btn-primary me-2" onClick={() => handleUpdate(data.id)}>Update</button>
//                                     <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;








import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Crud = () => {
    const [usercrud, setCrud] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [];
                setCrud(data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = (id) => {
        console.log(`Update item with id: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <button className="btn btn-success mb-3">Add +</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(usercrud) && usercrud.length > 0 ? (
                            usercrud.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button className="btn btn-primary me-2" onClick={() => handleUpdate(data.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crud;

