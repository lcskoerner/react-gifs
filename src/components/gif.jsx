/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { updateGif, id } = this.props;
    updateGif(id);
  }

  render() {
    const { id } = this.props;

    if (!id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
        id={id}
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
