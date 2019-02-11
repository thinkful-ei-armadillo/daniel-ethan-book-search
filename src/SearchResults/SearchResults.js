import React, { Component } from 'react';


class SearchResults extends Component {


  render () {
    console.log(this.props.books)

    if ( !this.props.books.items ) {
      return <p>Please retry your search</p>
    }

    const booksResult = this.props.books.items.map( book => {
      if (this.props.expandedId === book.id) {
         return (
         <div className="bookresult">
            <h3>{book.volumeInfo.title}</h3>
            <h4>{book.volumeInfo.authors.join(', ')}</h4>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book image" /><br/>
            <p>{book.volumeInfo.description}</p>
            <button onClick={() => this.props.onClick(book.id)}>Details</button>
            
          </div>
        )
      }
      else {
      return (
        <div className="bookresult">
          <h3>{book.volumeInfo.title}</h3>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book image" /><br/>
          <button onClick={() => this.props.onClick(book.id)}>Details</button>
          
      </div>
      )
    }
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
