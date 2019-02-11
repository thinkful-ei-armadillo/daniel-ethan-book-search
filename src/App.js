import React, { Component } from 'react';
import SearchForm from './SearchBar/SearchForm';
import SearchResults from './SearchResults/SearchResults';
import './App.css';

class App extends Component {

  state = {
    loading: false,
    books: [],
    searchTerm: '',
    printType: '',
    bookType: '',
    error: null, // Extra state - tells us if there was an error fetching
    expandedId: ''
};

onSearchFormSubmit = (e) => {
  e.preventDefault();
  this.setState({searchTerm: e.currentTarget.searchTerm.value})
  console.log(this.state.searchTerm);
  this.getBooks(e.currentTarget.searchTerm.value, null, null);
}

updateFilterBookType = (booktype) => {
  console.log(`user has filtered for ${booktype}`);
  this.setState({bookType: booktype})
  this.getBooks(null, null, booktype);
}

updateFilterPrintType = (printtype) => {
  console.log(`user has filtered for ${printtype}`);
  this.setState({printType: printtype})
  this.getBooks(null, printtype, null)
}

expandClickedBook = (id) => {
  this.setState({ 
    expandedId: id,
  })
  console.log(this.state.expandedId);
  
}

  getBooks = (term, printtype, booktype) => {

    const API_KEY = 'key=AIzaSyCs4fhUwUE28Lktlayaj18jIzdp1QpTd4Y';

    let BASE_URL = `https://www.googleapis.com/books/v1/volumes?`;

    if (term) {
      BASE_URL += `&q=${term}`;
    }

    if (printtype) {
      BASE_URL += `q=${this.state.searchTerm}&printType=${printtype}`;
    }

    if (booktype) {
      BASE_URL += `q=${this.state.searchTerm}&filter=${booktype}`;
    }

    this.setState({
      loading: true,
      error: null,
    });


    console.log(BASE_URL);
    console.log(this.state.searchTerm);


    fetch(BASE_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to get books');
        }
      })
      .then((books) => {
        this.setState({
          books: books,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          loading: false,
        });
      });
  }

  componentDidMount() {
    // this.getBooks();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm
        searchTerm={this.state.searchTerm}
        printType={this.state.printType}
        bookType={this.state.bookType}
        books={this.state.books}
        onSubmit={(e) => {this.onSearchFormSubmit(e) }}
        onBookTypeChange={this.updateFilterBookType}
        onPrintTypeChange={this.updateFilterPrintType}
        />
        <SearchResults
        searchTerm={this.state.searchTerm}
        printType={(booktype) => this.updateFilterPrintType(booktype)}
        bookType={(printtype) => this.updateFilterBookType(printtype)}
        books={this.state.books}
        onClick={(id) => {this.expandClickedBook(id)}}
        expandedId={this.state.expandedId}
        />
      </div>
    );
  }
}

export default App;
