import React, { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";
import GlobalContext from "../contexts/globalContext";

const Search = () => {
  const { handleChange, input, handleSubmit } = useContext(GlobalContext);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Find an organization..."
          value={input}
          onChange={handleChange}
        />
        <RiSearch2Line onClick={handleSubmit} className="icon" />
      </div>
    </form>
  );
};

export default Search;
