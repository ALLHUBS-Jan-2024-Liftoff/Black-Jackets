import React, { useState } from "react";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your YouTube Data API Key
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const YouTubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(SEARCH_URL, {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          key: API_KEY,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for videos"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.id.videoId}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                  />
                  <p>{video.snippet.title}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearch;
