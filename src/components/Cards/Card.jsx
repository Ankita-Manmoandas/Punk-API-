import React from "react";
import "../Cards/card.scss";

const Card = (props) => {
  const {image, name, brewed, abv,ph} = props
return <div className="Card">

  <img src= {image} alt="solo beer can" className= "Card__image"/>
  <p>{name}</p>
  <p>{brewed}</p>
  <p>{abv}</p>
  <p>{ph}</p>

</div>

}
// console.log (Card)

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