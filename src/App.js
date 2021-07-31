import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([
    { id: 1, timeStamp: 1, name: 'item 1', complete: false },
    { id: 2, timeStamp: 2, name: 'item 2', complete: true }
  ])

  function handleSubmit (e) {
    e.preventDefault()
    const newList = [
      ...list,
      {
        timeStamp: Date.now(),
        name: input,
        complete: false
      }
    ]
    setList(newList)
    // POST name
    setInput('')
  }


  function handleChange (e) {
    const newItem = e.target.value
    setInput(newItem)
  }

  function clickDelete(id) {
    console.log(id)
  }

  function toggleComplete(id) {
    console.log(id)
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
    <ul>
        {list.map(item =>
          <li key={item.timeStamp} className={item.complete ? 'completed' : ''}>
            <input className="toggle" type="checkbox" checked={item.complete} onChange={() => toggleComplete(item.timeStamp)} value={item.timeStamp} />
            {item.name} <button onClick={() => clickDelete(item.timeStamp)} >Delete</button></li>
        )}
      </ul>
      <p>&copy;2021 Kris Wood</p>
    </>
  )
}

export default App;
