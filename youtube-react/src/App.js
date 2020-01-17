// React imports
import React from "react";

// General imports
import API from "./configs/youtube";

// Styles
import "./App.css";

// Components Imports
import Search from "./components/Search";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = {
    videos: false
  };

  componentDidMount() {
    this.searchVideo("dogs are funny");
  }

  searchVideo = async term => {
    const response = await API.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });

    console.log(response.data.items);
  };

  render() {
    return (
      <div className="App">
        <Search searchVideo={this.searchVideo} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
