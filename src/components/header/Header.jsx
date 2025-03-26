import React from "react";

const Header = ({ query, setQuery, onClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search image Term"
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default Header;
