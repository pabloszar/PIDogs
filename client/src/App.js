//? Import dependecies
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

//? Import views & components
import './App.css';
import Home from './components/Views/Home/Home';
import Detail from './components/Views/Detail/Detail';
import Landing from './components/Views/Landing/Landing';
import Form from './components/Views/Form/Form'

import Nav from './components/Nav/Nav';

//----------------------------------------------------------------------


function App() {

  const location = useLocation();
  
  
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    setShowNav(location.pathname !== "/");
  },[]);


  return (
    <div className="App">

      {showNav && <Nav />}
      
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/details/:detailId' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
