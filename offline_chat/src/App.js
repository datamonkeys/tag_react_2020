// React Imports
import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Messages from "./components/Messages";
import Input from "./components/Input";

import { Container } from "react-bootstrap";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Messages />
        <Input />
      </div>
    );
  }
}

export default App;
