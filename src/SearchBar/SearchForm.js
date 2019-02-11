import React, { Component } from 'react';
import Filter from './Filter';

class SearchForm extends Component {


  render () {

    return (
      <div className="searchBar">
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="searchTerm">Search:</label><br/>
          <input type="text" id="searchTerm" required></input>
          <input type="submit" value="Search" />
        </form>
        <Filter
        printType={this.props.printType}
        bookType={this.props.bookType}
        books={this.props.books}
        onFilterChange={(printType, bookType) => this.props.onFilterChange}
        />
      </div>

    )
  }

}

SearchForm.defaultProps = {
  searchTerm: '',
  printType: '',
  bookType: '',
  books: [],
  onSubmit: () => {},
  onFilterChange: () => {},
}

export default SearchForm;
