import React, {useState} from 'react'

export default function NewCharacterForm({handleAddCharacter}) {
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [isGood, setIsGood] = useState('')


function handleSubmit(e) {
  e.preventDefault()

  const newObject = {
    name,
    image,
    isGood
  }

handleAddCharacter(newObject)

}




  return (
    <div>
<form onSubmit={handleSubmit}  id='new-form'>
<input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

<input
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

<select onChange={(e) => setIsGood(e.target.value)} value={isGood}>
<option >Good/Bad</option>
  <option value={true}>Good 😇</option>
  <option value={false}>Bad 😈</option>
</select>

<button>Add new character</button>
</form>
    </div>
  )
}