import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, updateGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} updateGif={updateGif} />)}
    </div>
  );
};

export default GifList;
