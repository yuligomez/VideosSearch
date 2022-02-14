import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    //cuando se cargue la app se busca por defecto videos con el termino 'buldings'
    this.onTermSumbit("buldings");
  }

  onTermSumbit = async (term) => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    //console.log(response);
    //response.data.items  -->lista de videos
    this.setState({
      videos: response.data.items,
      //muestra por defecto el primer video de la lista de videos encontrada para el termino 'term'
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    //console.log("From the app", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSumbit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
