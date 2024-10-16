import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
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

    
     const handleDelete = async(id) => {
        try{
            await axios.delete(`http://localhost:8080/usercrud/` +id)
            window.location.reload();
        } catch(err){
            console.log(err);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create' className="btn btn-success mb-3">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                           <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(usercrud) && usercrud.length > 0 ? (
                            usercrud.map((data) => (
                                <tr key={data.id}>
                                     <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                    <Link to={`read/${data.id}`} className="btn btn-green me-2" >Read</Link>
                                        <Link to={`update/${data.id}`} className="btn btn-primary me-2" >Update</Link>
                                        <button className="btn btn-danger" onClick={()=> handleDelete(data.id)}>Delete</button>
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

