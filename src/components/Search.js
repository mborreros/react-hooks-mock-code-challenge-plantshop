import React from "react";

// I can search for plants by their name and see a filtered list of plants.

function Search({ onSearch }) {

  function handleSearchInput(e) {
    let searchBy = (e.target.value)
    onSearch(searchBy)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search;
