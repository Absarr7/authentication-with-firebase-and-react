import React, {} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Verify from "./components/Verify";


import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
import ForgotPass from "./components/ForgotPass";

const App = ()=> {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/verification-pending' element={<Verify/>}></Route>
      <Route exact path='/forgot-pass' element={<ForgotPass/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
