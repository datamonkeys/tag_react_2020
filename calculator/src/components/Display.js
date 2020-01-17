import React, { Component } from "react";

class Display extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="display">
        <span className="numbers">{result}</span>
      </div>
    );
  }
}

export default Display;
