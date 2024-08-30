import React, { useState } from "react";
import axios from "axios";

function YouTubeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchYouTube = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8090/api/youtube/search`,
        {
          params: { query },
        }
      );
      setResults(response.data.items);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchYouTube}>Search</button>
      <ul>
        {results.map((item) => (
          <li key={item.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
              {item.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YouTubeSearch;
