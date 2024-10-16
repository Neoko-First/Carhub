"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  const handleSearch = () => {
    console.log("search");
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
