//! Dice function => 3d6 = Dice(3, 6); 8d4 = Dice(8, 4)
import React from 'react'
import {useState} from 'react'

export default function Dice() {
    const [diceResults, setDiceResults] = useState('')

    function roller(){
        let numberOfDice = document.getElementById("number_of_dice").value
        let maxValue = document.getElementById("max_value_of_dice").value
        let reply = [];
        for(let i = 1; i <= numberOfDice; i++){
            let face = Math.floor(Math.random()*maxValue) + 1;
            reply.push(face)
            console.log(reply)
        }
        let reply_sum = reply.reduce((a, b) => a + b, 0);
        let response = `${reply}, total = ${reply_sum}`
        setDiceResults(response)
    }
  return (
    <div>
      <input type='text' id="number_of_dice" placeholder='2'></input>
      <h3>d</h3>
      <input type='text' id="max_value_of_dice" placeholder='6'></input>
      <button onClick={roller}>Roll!</button>
      <p>{diceResults}</p>
    </div>
  )
}

