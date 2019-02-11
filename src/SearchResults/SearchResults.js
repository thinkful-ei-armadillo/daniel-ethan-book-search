import React, { Component } from 'react';


class SearchResults extends Component {


  render () {

    return (
      <div className="searchResults">
        
        {/* map the books array into individual search results */}
        <p>{this.props.books}</p>
      </div>
    );
  }

}


SearchResults.defaultProps = {
  searchTerm: '',
  printType: '',
  bookType: '',
  books: [],
  onSubmit: () => {},
  onFilterChange: () => {},
}

export default SearchResults;