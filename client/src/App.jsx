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

function App() {
  const [spell, setSpell] = useState('')
  const [spellDetail, setSpellDetail] = useState('')
  const [user, setUser] = useState(null)


  //! getSpell function makes api call and returns the Name of one spell selected at random.
  async function getSpell(){
    let randomNumber = Math.floor(Math.random()*320)
    try {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells/')
    console.log(response);
    setSpell(response.data.results[randomNumber].name)
    } catch (error) {
      console.error(error);
    }

  }


  // const curr_user = async () => {
  //   let myResponse = await axios.get('current_user/')
  //   let user = myResponse.data && myResponse.data[0] && myResponse.data[0].fields
  //   setUser(user)
  // }

  // useEffect(() => {
  //   curr_user()
  // },[])

  return (
    <div className="App">
        <AppNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/treasure-gen" element={<TreasureHoard />}/>
      </Routes>
      <div className="card">
        <button onClick={getSpell}>
          Get Spell
        </button>
        <h3>{spell}</h3>
        <p>{spellDetail}</p>
      </div>
    </div>
  )
}

export default App
