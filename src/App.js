import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer"
import Categories from "./components/Categories/Categories"
import Series from "./components/Series/Series"
import Movies from "./components/Movies/Movies"
function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Categories} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/movies" component={Movies} />

      <Footer/>
    </Router>
  );
}

export default App;
