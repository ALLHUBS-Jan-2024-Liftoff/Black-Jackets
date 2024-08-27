import React from "react";
import axios from "axios";
import SearchBar from "./Searchbar";
import youtube from "../YoutubeApi/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

axios.defaults.withCredentials = true;
// const BASEAPIURL = "http://localhost:8090/youtube/search";



class YoutubeSearch extends React.Component {
    
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("search", {
      params: {
        q: termFromSearchBar,
      },
    }); 

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
        
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default YoutubeSearch;
