import React from "react";
import Cardlist from "../Carlist/Cardlist";

const Main = (props) => {
  const {cardArray} = props



  return (
    <Cardlist cardArray={cardArray} /> 
  )


}


export default Main