import react from "react";
import "../SearchBox/Searchbox.scss"


const Search = (props) => {

  const {search, handleInput} = props
  return <div>
    <input className="Search" value = {search} onInput = {handleInput} /> 

  </div>
}

export default Search