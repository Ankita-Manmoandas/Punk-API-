import React from "react";

import "./FilterItem.scss";

const FilterItem = (props) => {
  const { handleCheck, filterClassic, filterAcidic} = props
  return <div className="filter-item">
   <input type="checkbox"  name ="High ABV (<6.0%)" onChange={handleCheck}/> 
   <label for="High ABV (<6.0%)" > High ABV </label>  
  <input type="checkbox" name="Classic" onChange={filterClassic}/>
   <label for="Classic"> Classic </label>   
   <input type="checkbox" name ="Acidic" onChange= {filterAcidic}/>
   <label for="Acidic"> Acidic </label>   
  </div>
}

export default FilterItem


