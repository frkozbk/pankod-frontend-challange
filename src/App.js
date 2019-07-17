import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer"
import Categories from "./components/Categories/Categories"
function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Categories} />
      <Footer/>
    </Router>
  );
}

export default App;
