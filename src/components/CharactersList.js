import {useState} from 'react'
import { characters, getNewRandomCharacter } from "../data";
import CharacterCard from './CharacterCard';


export default function CharactersList() {
const [allCharacters, setAllCharacters] = useState(characters)


  return (
    <div>
    <button>Add new character</button>
    <div className='CharactersList'>
        {allCharacters.map(character => <CharacterCard key={character.id} />)}
    </div>
    </div>
  )
}
