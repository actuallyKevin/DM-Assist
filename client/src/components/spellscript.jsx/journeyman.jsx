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
    const levelSixSpells = await axios.get("https://www.dnd5eapi.co/api/spells?level=3")
    const countSix = levelSixSpells.data.count
    while(i < 3){
        //! Three random third level spells
        let randomNumber = Math.floor(Math.random() * countSix)
        let spell = levelSixSpells.data.results[randomNumber]
        newSpellBook.push(spell);
        i++;
    }
    setDisplaySpellBook(newSpellBook)
}