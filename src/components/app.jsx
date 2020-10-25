/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './search_bar';


class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
