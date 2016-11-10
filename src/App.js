import React, { Component } from 'react';
import List from './components/List.js'
import SearchBar from './components/SearchBar.js'
class App extends Component {
  render() {
    return (
      <div className="App">
            <SearchBar />
            <List />
      </div>
    );
  }
}

export default App;
