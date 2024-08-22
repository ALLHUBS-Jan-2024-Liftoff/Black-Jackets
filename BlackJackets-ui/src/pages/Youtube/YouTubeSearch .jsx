import React, { useState } from "react";
import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();

const YouTubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async (query) => {
    app.use(cors());

    app.get("/api/search", async (query, res) => {
      try {
        console.log("query", query);
        //const { query } = query;
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: query,
              key: "AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4",
            },
          }
        );
        setVideos(res.json(response.data));
      } catch (error) {
        res
          .status(500)
          .json({ error: "Failed to fetch data from YouTube API" });
      }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("Server running on port", `${PORT}`);
    });

    // try {
    //   const response = await axios.get("http://localhost:5000/search", {
    //     params: { query },
    //   });
    //   setVideos(response.data.items);
    // } catch (error) {
    //   console.error("Error fetching videos:", error);
    // }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;

// import React, { useState } from "react";
// import { fetchVideos } from "./youtubeApi";

// const YouTubeSearch = () => {
//   const [query, setQuery] = useState("");
//   const [videos, setVideos] = useState([]);

//   const handleSearch = async () => {
//     const results = await fetchVideos(query);
//     setVideos(results);
//   };

//   return (
//     <div className="youtube-search">
//       <div className="search-bar">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search YouTube"
//           className="border p-2"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
//           Search
//         </button>
//       </div>

//       <div className="video-results mt-4">
//         {videos.map((video) => (
//           <div key={video.id.videoId} className="video-item mb-4">
//             <img
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
//             />
//             <h3 className="mt-2">{video.snippet.title}</h3>
//             <p>{video.snippet.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouTubeSearch;
