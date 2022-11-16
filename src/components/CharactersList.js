import {useEffect, useState} from 'react'
import CharacterCard from './CharacterCard';
import NewCharacterForm from './NewCharacterForm';
import Filter from './Filter';

export default function CharactersList() {
const [allCharacters, setAllCharacters] = useState([])
const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => setAllCharacters(data))
  }, [])


function handleAddCharacter(newObject) {

fetch('http://localhost:3000/characters', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newObject)
})
.then(res => res.json())
.then(data => {
  setAllCharacters([...allCharacters, data])
})

  }

  const filteredArray = allCharacters.filter((character) => character.name.toLowerCase().includes(filter.toLowerCase()))
 
  return (
    <div>
     <NewCharacterForm handleAddCharacter={handleAddCharacter}/> 
     <Filter setFilter={setFilter} filter={filter}/>
    <div className='CharactersList'>
        {filteredArray.map(character => {
        return <CharacterCard key={character.id} character={character} />})}
    </div>
    </div>
  )
}
