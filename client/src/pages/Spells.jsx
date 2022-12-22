import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import RandoSpellByLevel from '../components/RandoSpellByLevel'

export default function Spells() {
    const [spell, setSpell] = useState('')
    const [spellDetail, setSpellDetail] = useState('')
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
    <div>
        <div>
            <RandoSpellByLevel />
        </div>
        <div>
        <button onClick={getSpell}>
          Get Random Spell
        </button>
        <h3>{spell}</h3>
        <p>{spellDetail}</p>
      </div>
    </div>
  )
}