import React, { useState, useEffect } from 'react'
import { getItems } from './apiClient'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  // { id: 1, timeStamp: 1, name: 'item 1', complete: false },
  //   { id: 2, timeStamp: 2, name: 'item 2', complete: true }

  useEffect(() => {
    getItems()
      .then((list) => {
        setList(list)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


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
    <img id="cart-image" alt="shopping cart" src="./images/cart.jpg"/>
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
        {list && list.map(item =>
          <li key={item.timeStamp} className={item.complete ? 'completed' : ''}>
            <input className="toggle" type="checkbox" checked={item.complete} onChange={() => toggleComplete(item.timeStamp)} value={item.timeStamp} />
            {item.name} <button onClick={() => clickDelete(item.timeStamp)} >Delete</button></li>
        )}
      </ul>
      <p id="footer">&copy; 2021 <a href="https://github.com/krisjwood/aws-shopping-list">Kris Wood</a></p>
    </>
  )
}

export default App;
