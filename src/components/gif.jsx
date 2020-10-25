/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media.giphy.com/media/DXwObb9VJE3YHszOkR/giphy.gif";
    return (
      <img
        src={src}
        alt=""
        className="gif"
      />
    );
  }
}

export default Gif;
