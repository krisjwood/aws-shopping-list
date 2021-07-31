import React, { useState, useEffect } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  function handleSubmit (e) {}

  
  function handleChange (e) {
    const newItem = e.target.value
    setInput(newItem)
  }

  return (
    <>
    <h1>Kris&#39; Shopping List</h1>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add item to list"
        autoFocus={true}
        onChange={handleChange}
        value={input}
      />
      <button>Add</button>
    </form>
    </>
  )
}

export default App;
