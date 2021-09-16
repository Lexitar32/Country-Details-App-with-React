import React from 'react';
import Header from "./components/Header";
import CountryCardCont from "./components/CountryCardCont";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="appHeaderOuter">
        <Header />
      </div>
      <div className="appBody">
        <CountryCardCont />
      </div>
    </div>
  )
}

export default App;
