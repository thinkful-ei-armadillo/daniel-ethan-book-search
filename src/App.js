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
    error: null // Extra state - tells us if there was an error fetching
};

// do our API fetch here

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm 
        searchTerm={this.state.searchTerm} 
        // printType={this.state.printType}
        bookType={this.state.bookType}
        books={this.state.books}
        onSubmit={() => this.state.searchTerm}
        // onFilterChange={(printType, bookType) => this.state.onFilterChange}
        />
        <SearchResults 
        searchTerm={this.state.searchTerm} 
        printType={this.state.printType}
        bookType={this.state.bookType}
        books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
