import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import RandoSpellByLevel from '../components/RandoSpellByLevel'
import SpellBook from '../components/SpellBook'

export default function Spells() {
    const [spell, setSpell] = useState('')
    const [spellDetail, setSpellDetail] = useState('')
      //! getSpell function makes api call and returns the Name of one spell selected at random.
//   async function getSpell(){
//     let randomNumber = Math.floor(Math.random()*320)
//     try {
//     const response = await axios.get('https://www.dnd5eapi.co/api/spells/')
//     console.log(response);
//     setSpell(response.data.results[randomNumber].name)
//     } catch (error) {
//       console.error(error);
//     }

//   }
  return (
    <div>
        <h3 id="show-detail" style={{padding: 50}}>Spells</h3>
        <div id='left-align'>
            <RandoSpellByLevel />
        </div>
        <div id='right-align'>
            <SpellBook />
        </div>
    </div>
  )
}
