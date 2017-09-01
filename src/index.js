import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCkAHOTWopyQ7J60vmSiET320NO7rWOqwc';

const App = () => {
  return (
    <div>
      <SearchBar />
      </div>
    );
  }

  ReactDOM.render(<App />, document.querySelector('.container'));
