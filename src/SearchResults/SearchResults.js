import React, { Component } from 'react';


class SearchResults extends Component {


  render () {
    console.log(this.props.books)

    if ( !this.props.books.items ) {
      return <p>Please retry your search</p>
    }

    const booksResult = this.props.books.items.map( book => {
      return (
        <div className="bookresult">
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.description}</p>
      </div>
      )
      
    });
    

    return (
      <div className="searchResults">

        {/* map the books array into individual search results */}
        {booksResult}
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
