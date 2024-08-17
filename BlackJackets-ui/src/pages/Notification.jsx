import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMessages } from "../services/MessageService";

function Notification({ venueId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then(setMessages);
    //fetchMessagesListByVenueId(venueId).then(setMessages);
  }, []);

  function handleReply() {}

  return (
    <>
      <div className="container">
        <h2 className="text-container">Contact of Bands</h2>
        {messages.map((message) => (
          <div key={message.id}>
            <h4>{message.name}</h4>
            <ul>
              <li>{message.email}</li>
              <li>{message.content}</li>
              <button className="btn btn-info" onClick={() => handleReply()}>
                Reply
              </button>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notification;
