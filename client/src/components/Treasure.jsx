import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
export default function Treasure(props) {
    const [displayTreasure, setDisplayTreasure] = useState([])
    const [itemDetail, setItemDetail] = useState('Click on an item for details.')

    console.log(props.treasureTable)


    function randomItems(){
        let i = 0
        let lootList = []
        while (i < (document.getElementById("magic_item_quantity").value)){
        let randomNumber = Math.floor(Math.random()*362)
        let loot = props.treasureTable.data.results[randomNumber]
            lootList.push(loot);
            i++;
    }
        setDisplayTreasure(lootList)
}

    // async function findDetail(url){
    //     let detail = await axios.get(`https://www.dnd5api.co/${url}`)
    //     setItemDetail(detail)
    // }

    const showLoot = displayTreasure.map(item => 
    <div id="show-loot" onClick={async (event) =>{
        event.preventDefault
        let detail = await axios.get(`https://www.dnd5eapi.co${item.url}`)
        console.log(detail, 'DETAIL')
        setItemDetail(detail.data.desc)
    }}>
        {item.name}
    </div>);


    // const showDetail =

  return (
    <div>
        <label for="magic_item_quantity">How many magic items?</label>
        <select name="magic_item_quantity" id="magic_item_quantity">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
        </select>
        <button onClick={randomItems}>Roll for treasure!</button>
        <ul>{showLoot}</ul>
        <div id='item_detail'>
            {itemDetail}
        </div>
    </div>
  )
}
