// React Imports
import React from "react";

function Message(props) {
  const { message, index } = props;

  return (
    <div className="message" key={index}>
      <strong>{message.name}</strong> {message.msg}
    </div>
  );
}

export default Message;
