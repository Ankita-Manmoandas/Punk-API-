// App.jsx
import "./App.scss";
import Cardlist from "./components/Carlist/Cardlist";
import Nav from "./components/Nav/Navbar";

const App = () => {
  return (
    <div className="app">
     
      <header className="greeting">
        <h1 className="greeting__heading">PUNK API </h1>
       
      </header>
      <div className="page"> 
      <Nav />
      <section>
      <Cardlist className ="card-grid" /> 
      </section>
      </div>
     
    </div>
  );
};

export default App;