import React, { useEffect, useState } from 'react';

const Venue = () => {
  const [videos, setVideos] = useState([]);
  const userId = 1;

  useEffect(() => {
      loadUserVideos(userId);
    }, []);

    const loadUserVideos = async (userId) => {
      try {
        const response = await fetch(`/api/videos/${userId}`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const displayVideo = (videoId) => (
        <iframe
          key={videoId}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );

       return (
          <div>
            <h1>Venue Videos</h1>
            <div id="venueVideos">
              {videos.map((video) => displayVideo(video.videoId))}
            </div>
          </div>
        );
      };

      export default Venue;