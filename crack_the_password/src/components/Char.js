import React from "react";

class Char extends React.Component {
  state = { active: false };

  handleActive = char => {
    const { handleChars } = this.props;
    // The same as...
    // const handleChars = this.props.handleChars;
    // =D

    handleChars(char, this.state.active);

    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { char } = this.props;
    const isActive = this.state.active ? "active" : "";
    return (
      <div
        className={`char ${isActive}`}
        onClick={() => this.handleActive(char)}
      >
        {char.toString()}
      </div>
    );
  }
}

export default Char;
