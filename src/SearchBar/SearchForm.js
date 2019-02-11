import React, { Component } from 'react';
import Filter from './Filter';

class SearchForm extends Component {
  

  render () {

    return (
      <div className="searchBar">
        <form>
          <label for="searchTerm">Search:</label><br/>
          <input type="text" id="searchTerm" required></input>
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