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
