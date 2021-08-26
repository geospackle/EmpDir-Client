import { useState, useCallback } from "react";
import "./SearchBar.css";
import debounce from "../helpers/debounce";

const SearchBar = ({ passSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    deb(e.target.value);
  };

  const deb = useCallback(
    debounce((searchVal) => {
      passSearch(searchVal);
    }, 100),
    []
  );

  return (
    { search } && (
      <div>
        <input
          className="input"
          type="text"
          placeholder="Search for name"
          value={search}
          onChange={handleChange}
        />
      </div>
    )
  );
};

export default SearchBar;
