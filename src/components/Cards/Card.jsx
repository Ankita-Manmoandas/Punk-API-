import React from "react";
import "../Cards/card.scss";
import MoreInfo from "../Moreinfo/MoreInfo";
import { useState } from "react/cjs/react.development";

const Card = (props) => {
  const {image, name, brewed, abv,ph,} = props

  const [showMoreInfo, setShowMoreInfo] = useState (false);

  const [showCard, setShowCard] =useState(true);


  const toggleCard = () => {

    setShowMoreInfo(!showMoreInfo)
    setShowCard (!showCard)
  }





return <div className="Card">
  {showCard && 
  <>
    <img src= {image} alt="solo beer can" className= "Card__image"/>
    <p> {name}</p>
    <p>First brewed: {brewed}</p>
    <p>ABV: {abv}</p>
    <p> pH: {ph}</p>
    <button className="Card__button" onClick = {toggleCard}> More information</button>
    </>
  }
  {showMoreInfo && (
    <MoreInfo 
    togglefunction= {toggleCard} 
    
    
    
   />
  )}

</div>

}


export default Card



// const Card = (props) => {
//   const {image} = props
//   const cardMap = image.map(item => {
//     return <div>
//       <img src= {item.image_url} alt ="beer" />
//     </div>
//   })
//   return cardMap
// }

// export default Card