import React, { Component } from 'react';


class Filter extends Component {
  
  onBookTypeChange = (e) => {
    return this.props.onBookTypeChange(e.currentTarget.value);
  }

  onPrintTypeChange = (e) => {
    return this.props.onPrintTypeChange(e.currentTarget.value);
  }

  render () {

    return (
      <div className="filter">
        <select className="bookType" onChange={this.onBookTypeChange}>
          <option value="">Select a Book Type</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="partial">Partial</option>
        </select>
        <select className="printType" onChange={this.onPrintTypeChange}>
          <option value="">Select a Print Type</option>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>

    )
  }

}

Filter.defaultProps = {
  printType: '',
  bookType: '',
  books: [],
  onBookTypeChange: '',
  onPrintTypeChange: ''
}

export default Filter;