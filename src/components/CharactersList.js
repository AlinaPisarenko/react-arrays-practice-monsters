import {useState, useEffect} from 'react'
import CharacterCard from './CharacterCard';
import NewCharacterForm from './NewCharacterForm';


export default function CharactersList() {
//setting initial state to the array from our fake DB
const [allCharacters, setAllCharacters] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => setAllCharacters(data))
}, [])


//function that runs onClick to add a new character
function handleAddCharacter({newCharacter}) {
//using spread operator to update te state with a copy of allCharacters array and add a new object to that copy
    setAllCharacters([...allCharacters, newCharacter])
}

//function that runs onClick to remove a character
function handleDelete(id) {

// creating a new array using .filter(), 
// Only returning elements where id is not matching the id that we passed as a parameter
const updatedArray = allCharacters.filter(character => {
    return character.id !== id
})
//updating state witt the updatedArray
setAllCharacters(updatedArray)
}


//function that runs onClick to update an object in the array(changing isGood to the opposite  value)
function handleUpdate(id) {

//creating a new array using .map/
//finding an object, where id is matching to the one that we passed as argument
const newArray = allCharacters.map(character => {
    if (character.id === id) {
        //if found the match -> update that object with new info
       return {...character, isGood: !character.isGood}
    } else {
        //if didn't find the match return unchanged object
        return character
    }
})
//set state to the newArray
setAllCharacters(newArray)

}

  return (
    <div>
        <NewCharacterForm handleAddCharacter={handleAddCharacter}/>

    <div className='CharactersList'>
        {/* 
        Calling .map() on alCharacters array and returning a new CharacterCard component for each object in that array. 
        Passing the whole character object and 2 functions as props
        */}
        {allCharacters.map(character => {
        return <CharacterCard key={character.id} character={character} handleDelete={handleDelete} handleUpdate={handleUpdate} />})}
    </div>
    </div>
  )
}
