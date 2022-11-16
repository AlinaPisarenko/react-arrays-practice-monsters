import React from 'react'

export default function Filter({setFilter, filter}) {
  return (
    <div className="Filter">
        <label htmlFor="filter">Find your favorite character:</label>
      <input
id="filter"
        type="text"
        placeholder="Type a name to search..."
        onChange={(e)=> setFilter(e.target.value)}
        value={filter}
      />
    </div>
  )
}
