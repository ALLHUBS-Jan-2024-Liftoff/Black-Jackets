// import axios from 'axios';
// import React, { useState } from "react";

// const API_KEY = 'YOUR_YOUTUBE_API_KEY';
//     const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// export const fetchVideos = async (query) => {
//   try {
//     const response = await axios.get(${BASE_URL}/search, {
//       params: {
//         part: 'snippet',
//         maxResults: 10,
//         q: query,
//         key: API_KEY,
//       },
//     });
//     return response.data.items;
//   } catch (error) {
//     console.error('Error fetching videos:', error);
//     return [];
//   }
// };

// function Youtube() {

//   const [video, setVideo] = useState();
//   //   fetch(
//   //     "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=UUSvsBApfz5XQJ5HdOKGsnEA&key=AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4"
//   //   )
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //     });
//   return <div>Youtube</div>;
// }

// export default Youtube;
