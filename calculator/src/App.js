// React imports
import React, { Component } from "react";

// Style imports
import "./App.css";

// Component imports
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";

class App extends Component {
  state = {
    result: "0",
    equalPressed: false
  };

  onClick = button => {
    let { result, equalPressed } = this.state;

    if (equalPressed) {
      result = "";
    }

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      if (result === "0") {
        result = button;
      } else {
        result = result + button;
      }

      this.setState({
        result: result,
        equalPressed: false
      });
    }
  };

  calculate = () => {
    let { result } = this.state;
    let checkResult = "";

    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else if (result.includes(",")) {
      checkResult = result.replace(",", ".");
    } else if (result.includes("++")) {
      checkResult = result.replace("++", "+");
    } else {
      checkResult = result;
    }

    try {
      result = (eval(checkResult) || "") + "";

      if (result.includes(".")) {
        result = result.replace(".", ",");
      } else if (result === "") {
        result = 0;
      }
    } catch (e) {
      result = "Error";
    }

    this.setState({
      result,
      equalPressed: true
    });
  };

  reset = () => {
    this.setState({
      result: "0"
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
