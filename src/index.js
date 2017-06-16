import React     from 'react';
import ReactDOM  from 'react-dom';

import SearchBar from "./components/search_bar";

const API_KEY = '';

// Create a new component
// Produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the components generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
