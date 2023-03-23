import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';


import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Verify from "./components/Verify";

const App = ()=> {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
      <Route path='/verification-pending' element={<Verify/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
