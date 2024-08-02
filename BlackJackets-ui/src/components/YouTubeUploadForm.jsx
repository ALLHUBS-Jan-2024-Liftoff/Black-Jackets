import React, { useState } from 'react';

const UploadForm = ({ onVideoUpload }) => {
  const [url, setUrl] = useState('');
  const userId = 1;

   const handleSubmit = async (event) => {
      event.preventDefault();
      const videoId = extractVideoId(url);

      if (videoId) {
            const response = await uploadVideo(videoId, userId);
            if (response) {
              onVideoUpload(videoId);
            } else {
              alert('Error uploading video');
            }
          } else {
            alert('Invalid YouTube URL');
          }
        };

        const extractVideoId = (url) => {
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
          };

          const uploadVideo = async (videoId, userId) => {
              try {
                const response = await fetch('/api/videos/upload', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ videoId, userId }),
                        });
                        return await response.json();
                      } catch (error) {
                        console.error('Error:', error);
                        return null;
                      }
                    };
return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="youtubeUrl">YouTube Video URL:</label>
      <input
        type="url"
        id="youtubeUrl"
        name="youtubeUrl"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;