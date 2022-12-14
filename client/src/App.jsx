import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import AppNav from './components/AppNav'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import {Routes, Route, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import TreasureHoard from './pages/TreasureHoard'
import Spells from './pages/Spells'
import StoryHooks from './pages/StoryHooks'
function App() {
  
  return (
    <div className="App">
        <AppNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/treasure-gen" element={<TreasureHoard />}/>
        <Route path="/spells" element={<Spells />}/>
        <Route path="/story-hooks" element={<StoryHooks />}/>
      </Routes>
    </div>
  )
}

export default App
