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

    console.log("obj", obj);

    this.props.parentMsgToState(obj);
  };

  render() {
    console.log(this.props.dummy);
    console.log("all props", this.props);

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
          <div className="col">
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
