// React imports
import React from "react";

class Search extends React.Component {
  state = {
    term: ""
  };

  handleOnChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.searchVideo(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleOnSubmit}>
          <div className="field">
            <label>Search...</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
