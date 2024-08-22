import React, { useEffect, useState } from "react";
const API = "AIzaSyBo-IqMlKnLRSVtRgoApx8pPLjqqV4gPu4";
const channelId = "UC8tLwlY9IpWZgARTAvWBQWA";
var fetchUrl =
  'https://www.googleapis.com/youtube/v3/search"?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResult=10';
export const ytvideos = () => {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllVideos(result);
      });
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xATptZbrdXE?si=CYW4qQsrG_ySlcbi"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  );
};
