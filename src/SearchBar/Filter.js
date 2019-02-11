import React, { Component } from 'react';


class Filter extends Component {
  

  render () {

    return (
      <div className="filter">
        <select className="bookType">
          <option value="">Select a Book Type</option>
        </select>
        <select className="printType">
          <option value="">Select a Print Type</option>
        </select>
      </div>

    )
  }

}

Filter.defaultProps = {
  printType: '',
  bookType: '',
  books: [],
  onFilterChange: () => {},
}

export default Filter;