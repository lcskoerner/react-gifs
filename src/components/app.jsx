import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy('4BH6TUCZ4cyiKI04aBJvnf9W5KS73UhZ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (_err, result) => {
      this.setState({ gifs: result.data });
    });
  }

  updateGif = (gif) => {
    this.setState({
      selectedGifId: gif
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateGif={this.updateGif} />
        </div>
      </div>
    );
  }
}

export default App;
