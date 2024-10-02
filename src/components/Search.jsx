import React from "react";

const Search = () => {
  return (
    <div className="flex border rounded-[10px] border-[#E6E7E8] px-2.5 py-2.5">
      <img className="w-6 h-6" src="/images/Icon.svg" alt="search" />
      <input
        type="search"
        className="outline-none ml-2"
        placeholder="Search Products"
      />
    </div>
  );
};

export default Search;
