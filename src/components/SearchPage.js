import React from "react";
import Search from "./Search";
import Results from "./Results";

const SearchPage = () => {
  return (
    <div className="search-page">
      <Search />
      <Results />
    </div>
  );
};

export default SearchPage;
