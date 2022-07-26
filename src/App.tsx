import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import {MainScreenContainer} from "./components/MainScreenContainer/MainScreenContainer";
import { Profile } from './components/Profile/Profile';
import {Login} from "./components/Profile/Login/Login";
import {Registration} from "./components/Profile/Registration/Registration";

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/main" element={<MainScreenContainer/>}/>
        <Route path="/" element={<MainScreenContainer/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>

      </Routes>
      </div>
  );
}

export default App;
