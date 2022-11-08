import {useEffect, useState} from 'react'
import CharacterCard from './CharacterCard';
import NewCharacterForm from './NewCharacterForm';


export default function CharactersList() {
const [allCharacters, setAllCharacters] = useState([])


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


  return (
    <div>
     <NewCharacterForm handleAddCharacter={handleAddCharacter}/> 
    <div className='CharactersList'>
        {allCharacters.map(character => {
        return <CharacterCard key={character.id} character={character} />})}
    </div>
    </div>
  )
}
