import React from "react";

const Search = (props) => {
  const { searchTerm, handleInput } = props;
  
 
  return <div>
       <input type="text" value={searchTerm} onInput={handleInput} />

  </div>
}

export default Search