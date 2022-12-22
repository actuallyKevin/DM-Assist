import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Treasure from '../components/Treasure'

export default function TreasureHoard() {
    const [treasureTable, setTreasureTable] = useState(null)
    async function getTable(){
        const allItems = await axios.get('https://www.dnd5eapi.co/api/magic-items/')
        setTreasureTable(allItems)
        console.log(treasureTable)
    }

    useEffect(() => {
        getTable()
    }, [])

  return (
    <div>
        <h3>Treasure Generator</h3>
        <Treasure treasureTable={treasureTable}/>
    </div>
  )
}
