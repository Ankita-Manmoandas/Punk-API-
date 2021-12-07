import React from "react";

import "./Navbar.scss";
import Search from "./SearchBox/_Searchbox";


const Nav = (props) => {
  const { searchTerm, handleInput} = props; 
  return <nav className="Nav">
   <Search searchTerm = {searchTerm}  handleInput = {handleInput}/> 
  </nav>
}
// to do a searchbar= you need to store search input,
//and check if input === api data beer name- so need to do it on the app? 

export default Nav