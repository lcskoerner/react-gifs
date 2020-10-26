import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <div className="gif-list">
        {gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} updateGif={this.props.updateGif} />;
        })}
      </div>
    );
  }
}

export default GifList;
