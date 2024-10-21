// import React, { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';

// const Crud = () => {
//     const [usercrud, setCrud] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/')
//             .then(res => {
//                 const data = Array.isArray(res.data) ? res.data : [];
//                 setCrud(data);
//             })
//             .catch(err => console.log(err));
//     }, []);

    
//      const handleDelete = async(id) => {
//         try{
//             await axios.delete(`http://localhost:8080/usercrud/` +id)
//             window.location.reload();
//         } catch(err){
//             console.log(err);
//         }
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to='/create' className="btn btn-success mb-3">Add +</Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                            <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(usercrud) && usercrud.length > 0 ? (
//                             usercrud.map((data) => (
//                                 <tr key={data.id}>
//                                      <td>{data.id}</td>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>
//                                     <td>{data.phone}</td>
//                                     <td>
//                                     <Link to={`read/${data.id}`} className="btn btn-green me-2" >Read</Link>
//                                         <Link to={`update/${data.id}`} className="btn btn-primary me-2" >Update</Link>
//                                         <button className="btn btn-danger" onClick={()=> handleDelete(data.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="3">No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Crud = () => {
//     const [usercrud, setCrud] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/')
//             .then(res => {
//                 const data = Array.isArray(res.data) ? res.data : [];
//                 // Sort data by 'id' in ascending order
//                 const sortedData = data.sort((a, b) => a.id - b.id);
//                 setCrud(sortedData);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/usercrud/` + id);
//             window.location.reload();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to='/create' className="btn btn-success mb-3">Add +</Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(usercrud) && usercrud.length > 0 ? (
//                             usercrud.map((data) => (
//                                 <tr key={data.id}>
//                                     <td>{data.id}</td>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>
//                                     <td>{data.phone}</td>
//                                     <td>
//                                         <Link to={`read/${data.id}`} className="btn btn-green me-2">Read</Link>
//                                         <Link to={`update/${data.id}`} className="btn btn-primary me-2">Update</Link>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5">No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Crud = () => {
//     const [usercrud, setCrud] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/')
//             .then(res => {
//                 const data = Array.isArray(res.data) ? res.data : [];
//                 // Sort data by 'id' in ascending order
//                 const sortedData = data.sort((a, b) => a.id - b.id);
//                 setCrud(sortedData);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/usercrud/` + id);
//             window.location.reload();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to='/create' className="btn btn-success mb-3">Add +</Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Serial No.</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(usercrud) && usercrud.length > 0 ? (
//                             usercrud.map((data, index) => (
//                                 <tr key={data.id}>
//                                     {/* Display serial number starting from 1 */}
//                                     <td>{index + 1}</td>
//                                     <td>{data.id}</td>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>
//                                     <td>{data.phone}</td>
//                                     <td>
//                                         <Link to={`read/${data.id}`} className="btn btn-green me-2">Read</Link>
//                                         <Link to={`update/${data.id}`} className="btn btn-primary me-2">Update</Link>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6">No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Crud = () => {
//     const [usercrud, setCrud] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/')
//             .then(res => {
//                 const data = Array.isArray(res.data) ? res.data : [];
//                 // Sort data by 'id' in descending order to show the most recent at the top
//                 const sortedData = data.sort((a, b) => b.id - a.id);
//                 setCrud(sortedData);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/usercrud/` + id);
//             window.location.reload();
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to='/create' className="btn btn-success mb-3">Add +</Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Serial No.</th>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(usercrud) && usercrud.length > 0 ? (
//                             usercrud.map((data, index) => (
//                                 <tr key={data.id}>
//                                     {/* Serial number will be based on the index, even if data is sorted */}
//                                     <td>{index + 1}</td>
//                                     <td>{data.id}</td>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>
//                                     <td>{data.phone}</td>
//                                     <td>
//                                         <Link to={`read/${data.id}`} className="btn btn-green me-2">Read</Link>
//                                         <Link to={`update/${data.id}`} className="btn btn-primary me-2">Update</Link>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6">No data available</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Crud;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as XLSX from 'xlsx';

const Crud = () => {
    const [usercrud, setCrud] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : [];
                // Sort data by 'id' in descending order to show the most recent at the top
                const sortedData = data.sort((a, b) => b.id - a.id);
                setCrud(sortedData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/usercrud/` + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to handle export to Excel
    const handleExport = () => {
        // Create a worksheet with user data
        const worksheet = XLSX.utils.json_to_sheet(usercrud);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'User Data');
        
        // Export workbook to Excel
        XLSX.writeFile(workbook, 'student_data.xlsx');
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create' className="btn btn-success mb-3">Add +</Link>
                <button onClick={handleExport} className="btn btn-warning mb-3">Export to Excel</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(usercrud) && usercrud.length > 0 ? (
                            usercrud.map((data, index) => (
                                <tr key={data.id}>
                                    {/* Serial number will be based on the index, even if data is sorted */}
                                    <td>{index + 1}</td>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>
                                        <Link to={`read/${data.id}`} className="btn btn-green me-2">Read</Link>
                                        <Link to={`update/${data.id}`} className="btn btn-primary me-2">Update</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crud;





