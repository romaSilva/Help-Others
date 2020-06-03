import React, { useContext } from "react";
import Search from "./Search";
import Results from "./Results";
import Spinner from "./Spinner";
import globalContext from "../contexts/globalContext";

const SearchPage = () => {
  const { loading } = useContext(globalContext);

  return (
    <div className="search-page">
      <Search />
      {loading ? <Spinner /> : <Results />}
    </div>
  );
};

export default SearchPage;
