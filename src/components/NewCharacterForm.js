import React, {useState} from 'react'

export default function NewCharacterForm({handleAddCharacter}) {

  return (
    <div>
<form  id='new-form'>
<input
        type="text"
        placeholder="name"
      />

<input
        type="text"
        placeholder="image"
      />

<select>
<option>Good/Bad</option>
  <option value={true}>Good 😇</option>
  <option value={false}>Bad 😈</option>
</select>

<button>Add new character</button>
</form>
    </div>
  )
}