import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer"
import Categories from "./components/Categories/Categories"
import Series from "./components/Series/Series"
function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Categories} />
      <Route exact path="/series" component={Series} />
      <Footer/>
    </Router>
  );
}

export default App;
