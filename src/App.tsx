import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import {MainScreenContainer} from "./components/MainScreenContainer/MainScreenContainer";
import { Profile } from './components/Profile/Profile';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/main" element={<MainScreenContainer/>}/>
        <Route path="/" element={<MainScreenContainer/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
  );
}

export default App;
