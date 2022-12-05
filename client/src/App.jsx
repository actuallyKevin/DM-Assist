import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [spell, setSpell] = useState('')

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

  return (
    <div className="App">
      <div className="card">
        <button onClick={getSpell}>
          Get Spell
        </button>
        <h3>{spell}</h3>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
