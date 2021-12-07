// App.jsx
import React, {useState, useEffect} from "react";
import "./App.scss";
import Card from "./components/Cards/Card";
import Cardlist from "./components/Carlist/Cardlist";
import Nav from "./components/Nav/Navbar";
import Main from "./components/Main/main";

const App = () => {
const [cardArr, setCardArr] = useState([]);

useEffect (() => {
  fetch('https://api.punkapi.com/v2/beers').then(response => {
    return response.json ()
  }).then(beerObject => {
    console.log (beerObject)
    setCardArr(beerObject)
  })

},[])

const [searchTerm, setSearchTerm] = useState ("");
  const handleInput = (event) => {
    // console.log (event.target.value);
    const userInput = event.target.value.toLowerCase ()
    setSearchTerm(userInput)
  }

  const filteredArr = cardArr.filter (search => {
    const beerName= search.name.toLowerCase ()
   return beerName.includes(searchTerm)
  })

  return (
    <div className="app">
     
      <header className="greeting">
        <h1 className="greeting__heading">PUNK API </h1>
       
      </header>
      <div className="page"> 
      <Nav searchTerm ={searchTerm}  handleInput = {handleInput}/>
      <section>
        <Main cardArray={filteredArr} /> 

      </section>
      </div>
     
    </div>
  );
};

export default App;