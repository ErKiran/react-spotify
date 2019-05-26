import React from 'react';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-title">
        Spotify React
     </div>
      <SearchBar />
      <div className="Gallery">
        Gallery
      </div>
    </div>

  );
}

export default App;
