import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          key: "YOUR_YOUTUBE_API_KEY",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from YouTube API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", `${PORT}`);
});

// const API_KEY = "AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4";
// const BASE_URL = "https://www.googleapis.com/youtube/v3";

// app.get("/search", async (req, res) => {
//   try {
//     const { query } = req.query;
//     const response = await axios.get(`${BASE_URL}/search`, {
//       params: {
//         part: "snippet",
//         maxResults: 10,
//         q: query,
//         key: API_KEY,
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data from YouTube API" });
//   }
// });

// import axios from "axios";
// const API_KEY = "AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4";
// const BASE_URL = "https://www.googleapis.com/youtube/v3";

// export const fetchVideos = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search`, {
//       params: {
//         part: "snippet",
//         maxResults: 1,
//         q: query,
//         key: API_KEY,
//       },
//     });
//     return response.data.items;
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//     return [];
//   }
// };
