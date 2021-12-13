import React from "react";
import FiltersList from "./FiltersList/FiltersList";

import "./Navbar.scss";
import Search from "./SearchBox/_Searchbox";


const Nav = (props) => {
  const {search, handleInput, handleCheck, filterClassic, filterAcidic, results} = props

  return <nav className="Nav">
    <label className="Nav__label-search"> Search by Beer Name</label>
    <Search className="Nav__search" searchNav= {search} handleInput = {handleInput} /> 
    <FiltersList handleCheck= {handleCheck} filterClassic={filterClassic} filterAcidic={filterAcidic}  results ={results}/> 

  </nav>
}
// to do a searchbar= you need to store search input,
//and check if input === api data beer name- so need to do it on the app? 

export default Nav