import axios from "axios";
const KEY = "AIzaSyBfLPyRoAEbtvlZ71El7MNyOaVWBRsj9Lo"; 

export default axios.create({
  baseURL:
    "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

