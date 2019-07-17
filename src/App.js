import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
