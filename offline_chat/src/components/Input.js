// React Imports
import React from "react";

class Input extends React.Component {
  state = {
    inputName: "",
    inputMessage: ""
  };

  handleInputName = event => {
    const inputName = event.target.value;

    this.setState({
      inputName
    });
  };

  handleInputMessage = event => {
    const inputMessage = event.target.value;

    this.setState({
      inputMessage
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const obj = {
      name: this.state.inputName,
      msg: this.state.inputMessage
    };

    // reset state
    this.setState({
      inputName: "",
      inputMessage: ""
    });

    this.props.parentMsgToState(obj);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={this.handleInputName}
              value={this.state.inputName}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              onChange={this.handleInputMessage}
              value={this.state.inputMessage}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary  btn-block">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Input;
