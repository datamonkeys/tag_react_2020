// React Imports
import React from "react";

// Styles
import "./App.css";

// Components
import Messages from "./components/Messages";
import Input from "./components/Input";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App container">
        <Messages />
        <Input />
      </div>
    );
  }
}

export default App;
