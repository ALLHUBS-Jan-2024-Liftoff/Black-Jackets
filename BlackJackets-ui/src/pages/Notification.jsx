import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMessages } from "../services/MessageService";

function Notification() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages().then(setMessages);
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
    // <div className="container">
    //   <h2 className="text-container">List of Messages</h2>
    //   <table className="table table-striped table-bordered">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Content</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {messages.map((message) => (
    //         <tr key={message.id}>
    //           <td>{message.id}</td>
    //           <td>{message.name}</td>
    //           <td>{message.email}</td>
    //           <td>{message.content}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default Notification;
