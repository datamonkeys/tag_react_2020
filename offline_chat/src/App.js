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

  messageToState = param => {
    const messages = this.state.messages;

    messages.push(param);

    this.setState({
      messages
    });
  };

  render() {
    return (
      <div className="App container">
        <Messages messages={this.state.messages} />
        <Input parentMsgToState={this.messageToState} />
      </div>
    );
  }
}

export default App;
