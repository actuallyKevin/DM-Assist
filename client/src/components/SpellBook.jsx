import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function SpellBook() {
    const [displaySpellBook, setDisplaySpellBook] = useState([])
    const [spellDetail, setSpellDetail] = useState('Click on a spell for details.')

    async function getApprentice(){
        let newSpellBook = []
        let i = 0
        const levelOneSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=1")
        const countOne = levelOneSpells.data.count
        console.log(levelOneSpells, 'LEVEL ONE SPELLS')
        while(i < 6){
            //! Six random first level spells
            let randomNumber = Math.floor(Math.random() * countOne)
            let spell = levelOneSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelTwoSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=2")
        const countTwo = levelTwoSpells.data.count
        while(i < 3){
            //! Three random second level spells
            let randomNumber = Math.floor(Math.random() * countTwo)
            let spell = levelTwoSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelThreeSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=3")
        const countThree = levelThreeSpells.data.count
        while(i < 2){
            //! Two random third level spells
            let randomNumber = Math.floor(Math.random() * countThree)
            let spell = levelThreeSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        let uniqueify = [...new Set(newSpellBook)]
        let finalBook = [...uniqueify]
        setDisplaySpellBook(finalBook)
    }

    async function getJourneyman(){
        let newSpellBook = []
        let i = 0
        const levelOneSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=1")
        const countOne = levelOneSpells.data.count
        while(i < 6){
            //! Six random first level spells
            let randomNumber = Math.floor(Math.random() * countOne)
            let spell = levelOneSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelTwoSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=2")
        const countTwo = levelTwoSpells.data.count
        while(i < 4){
            //! Four random second level spells
            let randomNumber = Math.floor(Math.random() * countTwo)
            let spell = levelTwoSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelThreeSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=3")
        const countThree = levelThreeSpells.data.count
        while(i < 3){
            //! Three random third level spells
            let randomNumber = Math.floor(Math.random() * countThree)
            let spell = levelThreeSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelFourSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=4")
        const countFour = levelFourSpells.data.count
        while(i < 3){
            //! Three random fourth level spells
            let randomNumber = Math.floor(Math.random() * countFour)
            let spell = levelFourSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelFiveSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=5")
        const countFive = levelFiveSpells.data.count
        while(i < 2){
            //! Two random fifth level spells
            let randomNumber = Math.floor(Math.random() * countFive)
            let spell = levelFiveSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        i = 0
        const levelSixSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=6")
        const countSix = levelSixSpells.data.count
        while(i < 2){
            //! Two random sixth level spells
            let randomNumber = Math.floor(Math.random() * countSix)
            let spell = levelSixSpells.data.results[randomNumber]
            newSpellBook.push(spell);
            i++;
        }
        let uniqueify = [...new Set(newSpellBook)]
        let finalBook = [...uniqueify]
        setDisplaySpellBook(finalBook)
    }

    async function getMaster(){
        let newSpellBook = []
      let i = 0
      const levelOneSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=1")
      const countOne = levelOneSpells.data.count
      while(i < 8){
          //! Eight random first level spells
          let randomNumber = Math.floor(Math.random() * countOne)
          let spell = levelOneSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelTwoSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=2")
      const countTwo = levelTwoSpells.data.count
      while(i < 5){
          //! Five random second level spells
          let randomNumber = Math.floor(Math.random() * countTwo)
          let spell = levelTwoSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelThreeSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=3")
      const countThree = levelThreeSpells.data.count
      while(i < 4){
          //! Four random third level spells
          let randomNumber = Math.floor(Math.random() * countThree)
          let spell = levelThreeSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelFourSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=4")
      const countFour = levelFourSpells.data.count
      while(i < 4){
          //! Four random fourth level spells
          let randomNumber = Math.floor(Math.random() * countFour)
          let spell = levelFourSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelFiveSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=5")
      const countFive = levelFiveSpells.data.count
      while(i < 3){
          //! Three random fifth level spells
          let randomNumber = Math.floor(Math.random() * countFive)
          let spell = levelFiveSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelSixSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=6")
      const countSix = levelSixSpells.data.count
      while(i < 2){
          //! Two random sixth level spells
          let randomNumber = Math.floor(Math.random() * countSix)
          let spell = levelSixSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      i = 0
      const levelSevenSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=7")
      const countSeven = levelSevenSpells.data.count
      while(i < 2){
          //! Two random seventh level spells
          let randomNumber = Math.floor(Math.random() * countSeven)
          let spell = levelSevenSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
        i = 0
      const levelEightSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=8")
      const countEight = levelEightSpells.data.count
      while(i < 2){
          //! Two random eigth level spells
          let randomNumber = Math.floor(Math.random() * countEight)
          let spell = levelEightSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
        i = 0
      const levelNineSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=9")
      const countNine = levelNineSpells.data.count
      while(i < 1){
          //! One random ninth level spell
          let randomNumber = Math.floor(Math.random() * countNine)
          let spell = levelNineSpells.data.results[randomNumber]
          newSpellBook.push(spell);
          i++;
      }
      let uniqueify = [...new Set(newSpellBook)]
      let finalBook = [...uniqueify]
      setDisplaySpellBook(finalBook)
}

    function getSpellBook() {
        let type = document.getElementById("generate_spellbook").value
        if (type == 1){
            return getApprentice()
        }else if (type == 2){
            return getJourneyman()
        }else if (type == 3){
            return getMaster()
        }
    }

    const showSpellBook = displaySpellBook.map(spell =>
        <div id='show-detail' onClick={async (e) =>{
            e.preventDefault
            let detail = await axios.get(`https://www.dnd5eapi.co${spell.url}`)
            console.log(detail, 'spell detail')
            setSpellDetail(detail.data.desc)
        }}>
            {spell.name}
        </div>);

  return (
    <div>
      <label for="generate_spellbook">How experienced is the Wizard?</label>
      <select name="generate_spellbook" id="generate_spellbook">
        <option value={1}>Apprentice</option>
        <option value={2}>Journeyman</option>
        <option value={3}>Master</option>
      </select>
      <button onClick={getSpellBook}>Generate SpellBook</button>
      <ul>{showSpellBook}</ul>
      <div id='show-detail'>{spellDetail}</div>
    </div>
  )
}
