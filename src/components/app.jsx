import React, { Component } from 'react';
import SearchBar from './search_bar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
