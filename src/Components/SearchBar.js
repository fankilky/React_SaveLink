/* <input type="search" placeholder="hashtag" className="search_input" /> */

import { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const onSearchChangeLocal = (e) => {
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
    props.onSearchChangeProp(newSearch);
  };

  return (
    <div className="searchbox">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="something"
        className="search_input"
        value={search}
        onChange={onSearchChangeLocal}
      />
    </div>
  );
}
