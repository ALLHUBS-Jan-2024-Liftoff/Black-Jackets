import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('source', selectedFile);
        formData.append('key', '6d207e02198a847aa98d0a2a901485a5');

        try {
            const response = await axios.post('https://freeimage.host/api/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.status_code === 200) {
                setImageUrl(response.data.image.display_url);
                setUploadStatus('Image uploaded successfully!');
            } else {
                setUploadStatus('Image upload failed.');
            }
        } catch (error) {
            setUploadStatus('An error occurred during upload.');
        }
    };

    return (
        <div>
            <h2>Image Uploader</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Image</button>
            <p>{uploadStatus}</p>
            {imageUrl && (
                <div>
                    <p>Uploaded Image:</p>
                    <img src={imageUrl} alt="Uploaded" />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
