import {useState} from 'react'
import CharacterCard from './CharacterCard';
import NewCharacterForm from './NewCharacterForm';


export default function CharactersList() {
const [allCharacters, setAllCharacters] = useState([])


  return (
    <div>
     <NewCharacterForm /> 
    <div className='CharactersList'>
        {allCharacters.map(character => {
        return <CharacterCard key={character.id} />})}
    </div>
    </div>
  )
}
