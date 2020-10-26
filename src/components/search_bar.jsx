import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { search } = this.props;
    const query = event.target.value;
    search(query);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
