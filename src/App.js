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
};

  search(term) {

    const API_KEY = 'AIzaSyCs4fhUwUE28Lktlayaj18jIzdp1QpTd4Y';

    this.setState({
      loading: true,
      error: null,
    });

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API_KEY}`)
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

  onSearchFormSubmit(e) {
    e.preventDefault();
    this.setState({searchTerm: e.currentTarget.searchTerm.value});
    this.search(e.currentTarget.searchTerm.value);
  }

  updateFilterBookType = (booktype) => {
    console.log(`user has filtered for ${booktype}`);
    this.setState({bookType: booktype})
  }

  updateFilterPrintType = (printtype) => {
    console.log(`user has filtered for ${printtype}`);
    this.setState({printType: printtype})
  }

  componentDidMount() {
    this.search();
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
        />
      </div>
    );
  }
}

export default App;
