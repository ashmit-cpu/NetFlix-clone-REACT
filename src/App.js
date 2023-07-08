import React from "react";

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from "./Pages/Home"
import Signin from "./Pages/Signin";
import Welcome from "./Pages/Welcome";
import { useEffect,useContext } from "react";
import { AuthContext,FirebaseContext } from "./Store/FirebaseContext";

function App() {
  const {setUser} = useContext(AuthContext);
  const{firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=> {
     setUser(user);
    });
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}>
          </Route>
          <Route path="/signin" element={<Signin />}>
          </Route>
          <Route path="/signup" element={<Signup />}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
