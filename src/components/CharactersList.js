import {useState} from 'react'
import { characters, getNewRandomCharacter } from "../data";
import CharacterCard from './CharacterCard';


export default function CharactersList() {
const [allCharacters, setAllCharacters] = useState(characters)


  return (
    <div className='CharactersList'>
        {allCharacters.map(character => {
        return <CharacterCard key={character.id} />})}
    </div>
  )
}
