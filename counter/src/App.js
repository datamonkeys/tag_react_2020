import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = { counter: 0 };

  handleCounter = type => {
    let counter;
    counter = type === "+" ? counter++ : counter--;

    this.setState({
      counter
    });
  };

  render() {
    return (
      <div className="App">
        <div className="counter">{this.state.counter}</div>
        <button onClick={() => this.handleCounter("+")}>+</button>
        <button>-</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default App;
