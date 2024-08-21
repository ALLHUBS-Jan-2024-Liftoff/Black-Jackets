import React, { useEffect, useState } from "react";
import {
  fetchMessagesListByVenueId,
  fetchMessages,
} from "../services/MessageService";

function Notification({ venueId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then(setMessages);
    //fetchMessagesListByVenueId(id).then(setMessages);
  }, []);

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
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notification;
