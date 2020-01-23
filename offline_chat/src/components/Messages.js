// React Imports
import React from "react";

import Message from "./Message";

function Messages(props) {
  const { messages } = props;

  // Just for now
  const allMessages = messages.map((message, index) => (
    <Message message={message} index={index} />
  ));

  return (
    <div className="messages">
      {allMessages.length > 0 ? allMessages : "No messages =("}
    </div>
  );
}

export default Messages;
