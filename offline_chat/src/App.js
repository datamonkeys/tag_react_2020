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

  messageToState = props => {
    console.log("app", props);
    const messages = this.state.messages;

    messages.push(props);

    this.setState({
      messages
    });
  };

  render() {
    return (
      <div className="App container">
        <Messages />
        <Input parentMsgToState={this.messageToState} dummy="dummy" />
      </div>
    );
  }
}

export default App;
