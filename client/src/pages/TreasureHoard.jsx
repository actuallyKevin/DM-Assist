import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function TreasureHoard() {
    const [treasureTable, setTreasureTable] = useState(null)
    const [displayTreasure, setDisplayTreasure] = useState(null)

    async function getTable(){
        const allItems = await axios.get('https://www.dnd5eapi.co/api/magic-items/')
        setTreasureTable(allItems)
    }

    useEffect(() => {
        getTable()
    }, [])

    function randomItems(){
        let randomNumber = Math.floor(Math.random()*363)
        let loot = treasureTable.data.results[randomNumber].name
        console.log(loot)
    }
  return (
    <div>
      <button onClick={randomItems}>Roll for Loot!</button>
    </div>
  )
}
