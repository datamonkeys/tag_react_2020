// React Imports
import React from "react";

// Styles
import "./App.css";

// Components
import Messages from "./components/Messages";
import Input from "./components/Input";

class App extends React.Component {
  state = {
    messages: []
  };

  messageToState = whereverVarName => {
    console.log("app", whereverVarName);
    const messages = this.state.messages;

    messages.push(whereverVarName);

    this.setState({
      messages
    });
  };

  render() {
    return (
      <div className="App container">
        <Messages />
        <Input parentMsgToState={this.messageToState} />
      </div>
    );
  }
}

export default App;
