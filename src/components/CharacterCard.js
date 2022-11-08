import React from 'react'

export default function CharacterCard({character}) {

const { name, image, isGood } = character

  return (
    <div className="CharacterCard">
      <h3>{name}</h3>
      <img src={image}></img>
      <button>Replace me 👀</button>
        <button className="remove-btn">REMOVE</button>
    </div>
  )
}
