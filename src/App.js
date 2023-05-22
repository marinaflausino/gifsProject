import React, { useState } from "react";
import './App.css';

function App() {
  return (
  <div className="App">
    <h1> GIFs </h1>
  </div>
  );
}

function SearchBox() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <input
      type="text"
      value={searchInput}
      onChange={handleSearchInputChange}
      placeholder="What crazy gif are you looking for?"
      />
    </div>
  );
}

export default App;
