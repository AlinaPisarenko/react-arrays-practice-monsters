import React, {useState} from 'react'

export default function NewCharacterForm({handleAddCharacter}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [isGood, setIsGood] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    const newCharacter = {
      name,
      image,
      isGood
    }

    handleAddCharacter(newCharacter)
  }

  return (
    <div>
<form onSubmit={handleSubmit} id='new-form'>

<input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="name"
        value={name}
      />

<input
        type="text"
        onChange={e => setImage(e.target.value)}
        value={image}
        placeholder="image"
      />

<select value={isGood} onChange={e => setIsGood(e.target.value)}>
  <option value={true}>Good</option>
  <option value={false}>Bad</option>
</select>

<button>Add new character</button>
</form>
    </div>
  )
}
