import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function RandoSpellByLevel() {
const [spell, setSpell] = useState('')

async function getSpellByLevel(){
    const level = document.getElementById("rando_spell_by_level").value
    const spellList = await axios.get(`https://www.dnd5eapi.co/api/spells?level=${level}`)
    console.log(spellList)
    const count = spellList.data.count
    const randomNumber = Math.floor(Math.random()*count)
    const finalSpell = spellList.data.results[randomNumber].name
    setSpell(finalSpell)

}
  return (
    <div>
      <p>Select a spell level</p>
      <select name="rando_spell_by_level" id="rando_spell_by_level">
        <option value={0}>Cantrip</option>
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
        <option value={4}>Level 4</option>
        <option value={5}>Level 5</option>
        <option value={6}>Level 6</option>
        <option value={7}>Level 7</option>
        <option value={8}>Level 8</option>
        <option value={9}>Level 9</option>
      </select>
      <button onClick={getSpellByLevel}>Get Spell</button>
      <h4>{spell}</h4>
    </div>
  )
}
