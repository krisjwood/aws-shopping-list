import React, { useState, useEffect } from 'react'
import { getItems, postItem, deleteItem, patchItem } from './apiClient'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    getItems()
      .then((list) => {
        setList(list.reverse())
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  function handleSubmit (e) {
    e.preventDefault()
    postItem(input)
    .then(() => {
      getItems()
      .then((list) => {
        setList(list.reverse())
      })
    })
    .catch((err) => {
      console.log(err)
    })
      setInput('')
  }


  function handleChange (e) {
    const newItem = e.target.value
    setInput(newItem)
  }

  function handleDelete(id) {
    deleteItem(id)
      .then(() => {
        getItems()
          .then((list) => {
            setList(list.reverse())
          })
        return null
      })
      .catch((err) => {
        console.log(err)
      })

  }

  function toggleComplete(id, complete) {
    const item = {
      id,
      complete: !complete
    }
    patchItem(item)
      .then(() => {
        getItems()
          .then((list) => {
            setList(list.reverse())
          })
          .catch((err) => {
            console.log(err)
          })
      return null
    }) 
  }

  return (
    <>
    <img id="cart-image" alt="shopping cart" src="./images/cart.jpg"/>
    <h1>Kris&#39; Shopping List</h1>
    <p>{list && list.length} items in list</p>
    {/* <p>{list && list.filter(item => item.complete === 1)}</p> */}
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
          <li key={item.id} className={item.complete ? 'completed' : ''}>
            <input className="toggle" type="checkbox" checked={item.complete} onChange={() => toggleComplete(item.id, item.complete)} value={item.id} />
            {item.name} <button onClick={() => handleDelete(item.id)} >Delete</button></li>
        )}
      </ul>
      <p id="footer">&copy; 2021 <a href="https://github.com/krisjwood/aws-shopping-list">Kris Wood</a></p>
    </>
  )
}

export default App;
