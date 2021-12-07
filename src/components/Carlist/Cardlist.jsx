import React, { useEffect, useState } from "react";
import "./Cardlist.scss";
import Card from "../Cards/Card";
import data from "../../data/data";


const Cardlist = (props) => {
  const {cardArray} = props 

  // const [cardArray, setCardArray] = useState ([]);
  // // const [cardRange, setCardRange] = useState (10)
  // fetch('https://api.punkapi.com/v2/beers').then(response => {
  //   return response.json ()
  // }).then(beerObject => {
  //   console.log (beerObject)
  //   setCardArray(beerObject)
  // })

  const cardMap = cardArray.map ((item, index) => {
    return  <Card  key={"item" + index} image = {item.image_url} name= {item.name} brewed = {item.first_brewed} abv = {item.abv}  ph={item.ph} />
  })

  
  return <div className = "Cards__list">
   {cardMap} 
  </div>





}

export default Cardlist

// using data file

// const Cardlist = () => {
//   const cardMap = data.map ((item, index) => {
//     return  <Card  key={"item" + index} image = {item.image_url} name= {item.name} brewed = {item.first_brewed} abv = {item.abv}  ph={item.ph} />
//   })

  
//   return <div className = "Cards__list">
//    {cardMap} 
//   </div>





