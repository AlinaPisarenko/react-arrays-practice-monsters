import React from 'react'

export default function CharacterCard({character, handleDelete, handleUpdate}) {


//destructuring an object, so we can use it's key-value pairs without typing character.name, character.img etc
const {id, name, image, isGood} = character

  return (
    <div className="CharacterCard">
      <h3>{name}</h3>
      <img src={image} alt='character'/>
      {/* 
      Calling functions onClick
      This functions passed from a parent component as props. 
      Passing an id of an object as argument to have reference to a specific character
       */}
      <button onClick={() => handleUpdate(id)} >{isGood ? "I'm good 😇" : "I'm bad 😈"}</button>
        <button onClick={() => handleDelete(id)} className="remove-btn">REMOVE</button>
    </div>
  )
}
