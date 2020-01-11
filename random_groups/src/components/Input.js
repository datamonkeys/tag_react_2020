// React imports
import React from "react";

class Input extends React.Component {
    state = {
        searchInput: ""
    }

    /* Get value from input for later use */
    handleSearch = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    }

    render() {
        return (
            <form className="form-inline">
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="groupsize"
                    placeholder="How many members minimum?"
                    onChange={this.handleSearch}
                    value={this.state.searchInput}
                />
                <button type="button" className="btn btn-primary mb-2" >Generate</button>
            </form>
        );
    }
}

export default Input;
