import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <button onClick={props.handleGeneratePassword}>Generate Password</button>
      {props.specialCharsArray && (
        <div className="array">
          <span>Array</span>
          <h3>{JSON.stringify(props.specialCharsArray)}</h3>
        </div>
      )}
      {props.password && (
        <div className="password">
          <span>Password</span>
          <h1>{props.password}</h1>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
