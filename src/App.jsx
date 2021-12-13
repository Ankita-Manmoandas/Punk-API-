// App.jsx
import React, {useState, useEffect} from "react";
import "./App.scss";
import Card from "./components/Cards/Card";
import Cardlist from "./components/Carlist/Cardlist";
import Nav from "./components/Nav/Navbar";
import Main from "./components/Main/main";

const App = () => {
const [cardArr, setCardArr] = useState([]);
const [searchTerm, setSearchTerm] = useState ("")
const [isChecked, setIsChecked ] = useState (false)
const [filteredArr, setfilteredArr] = useState([]);
const [filterOne, setFilter1] = useState ("");



useEffect (() => {
  const URL = `https://api.punkapi.com/v2/beers${filterOne}`
  fetch(URL).then(response => {
    return response.json ()
  }).then(beerObject => {
    console.log (beerObject)
    setCardArr(beerObject)
  })

},[filterOne])

// nav will still need same 2 props from search bar but we will be passing a function as the handleinput here, and the search term will be equal to the user input. need to also create a filtered araay that will filter, - will need touse state as we want to change the cards being sdiaplyed depending on the search term.- whole point of filter is to include items that match the search term- why we only return beer items that include the search term! 

const cardsFilter = cardArr.filter(card => {
  const beer = card.name.toLowerCase ();
  return beer.includes (searchTerm) 

})
// handinput so when user types we can change the card display
const handleInputText = event => {
  const inputTarget = event.target.value.toLowerCase ();
  return setSearchTerm (inputTarget)

}



// when you click the checkbox you want to store the value and return cards that include the checkbox value. 
// weh u click checkbox- handlecheck- u want to change the beer cards being displayed to include cards with a ABV igher than 6%.  
// since check box changes- we need to use state.

// const [check, setCheck]= useState ("");

// const handleClick = (event) => {
//   // console.log(event.target.checked)
//   // setIsChecked(!isChecked);

//   const abvFilter = cardArr.filter (beer => {
//     return beer.abv > 6; })
//     console.log (abvFilter)
//    event.target.checked ? setCardArr(abvFilter) : setCardArr(filteredArr)
// } 
//handleclick using URL= when
const handleClick = (e) => {
  const filterabv = "?abv_gt=6"
  e.target.checked ? setFilter1 (filterabv) : setFilter1 ("")
} 

const handleClassic = (e) => {
  const filterClassic = "?brewed_before=01-2010"
  e.target.checked ? setFilter1 (filterClassic) : setFilter1 ("")
}


const handleAcidic = (e) => {
  console.log(e)
  const filterCurrent = cardArr.filter(beer => {
    return beer.ph > 4
  })
  e.target.checked ? setCardArr (filterCurrent) : setCardArr (cardArr)
 
}
const results = () => {
  if (filterOne) {
   return filterOne.length
  } else {
  return cardArr.length;
  }

}

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">PUNK API </h1>    
      </header>
      <div className="page"> 
      <Nav search = {searchTerm} handleInput= {handleInputText} 
 handleCheck={handleClick} 
filterClassic={handleClassic}
filterAcidic={handleAcidic}
results = {results} />
       <div>
       {/* <h2> results {isChecked ? "ABV higher than 6%" : "All"} </h2> */}
        </div>
        
    
      
    
      <section>
        <Main className="cardArray" cardArray={cardsFilter} /> 

      </section>
      </div>
     
    </div>
  );
};


export default App;