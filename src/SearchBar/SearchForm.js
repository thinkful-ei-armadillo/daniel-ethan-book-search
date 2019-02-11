import React, { Component } from 'react';
import Filter from './Filter';
import './SearchBar.css';

class SearchForm extends Component {


  render () {

    return (
      <div className="searchBar">
        <form onSubmit={this.props.onSubmit}>
          <input type="text" id="searchTerm" placeholder="Search..." required></input>
          <input type="submit" value="Search" className="submit-button" />
        </form>
        <Filter
        printType={this.props.printType}
        bookType={this.props.bookType}
        books={this.props.books}
        onBookTypeChange={this.props.onBookTypeChange}
        onPrintTypeChange={this.props.onPrintTypeChange}
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
  onBookTypeChange: '',
  onPrintTypeChange: ''
}

export default SearchForm;
