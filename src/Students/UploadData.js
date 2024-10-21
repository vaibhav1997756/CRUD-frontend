// import React from 'react'

// const UploadData = () => {
//   return (
//     <div>
//         <form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">
//     <input type="file" name="file" />
//     <button type="submit">Upload Excel</button>
// </form>

//     </div>
//   )
// }

// export default UploadData

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadData = () => {
    const [file, setFile] = useState(null); // Hook to manage file state
    const navigate = useNavigate(); // Hook to redirect to the home page after upload

    // Handle file input change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submission and file upload
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!file) {
            alert("Please upload a file.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("File uploaded successfully!");
            navigate('/'); // Redirect to home after successful upload
        } catch (err) {
            console.error("Error uploading file: ", err);
            alert("Failed to upload file.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={handleFileChange} />
                <button type="submit">Upload Excel</button>
            </form>
        </div>
    );
};

export default UploadData;
