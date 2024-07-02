import { useRootContext } from "@/context/context";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import SearchIcon from "./SearchIcon";

const SearchPopup = () => {
  const { openSearch, toggleSearch } = useRootContext();

  const onSubmit = (data) => {
    console.log(data);
    toggleSearch(false);
  };

  return (
    <div className={`search-popup${openSearch ? " active" : ""}`}>
      <div
        onClick={toggleSearch}
        className="search-popup__overlay search-toggler"
      ></div>
      <div className="search-popup__content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="search" className="sr-only">
            search here
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Here..."
            required
          />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <SearchIcon color="black" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
