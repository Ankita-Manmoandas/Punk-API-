import react from "react";
import FilterItem from "../FilterItem/FilterItem";
import "../FiltersList/FilterList.scss";


const Filterlist = (props) => {
const {handleCheck, filterClassic,filterAcidic, results} = props


  return  <div className="filter-list">
    <p className="filter-list__results"> Results:{results} </p>
    <div className="filter-list__content"> 
    <FilterItem className="filter-list__item"  handleCheck= {handleCheck} filterClassic={filterClassic} filterAcidic={filterAcidic}/> 
    </div>
      
  </div>
}

export default Filterlist 