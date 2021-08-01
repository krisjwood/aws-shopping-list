import React, { useState, useEffect } from 'react'
import { getItems, postItem, deleteItem, patchItem } from './apiClient'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    getItems()
      .then((list) => {
        setList(list)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [list])


  function handleSubmit (e) {
    e.preventDefault()
    postItem(input)
    setInput('')
  }


  function handleChange (e) {
    const newItem = e.target.value
    setInput(newItem)
  }

  function clickDelete(id) {
    console.log(id)
    deleteItem(id)
      .then(() => {
        return null
      })
      .catch((err) => {
        console.log(err)
      })

  }

  function toggleComplete(id, complete) {
    console.log('before: ', id, complete)
    console.log(list)

    complete = !complete

    console.log('after: ', complete)

    const item = {
      id,
      complete
    }

    patchItem(item)
    // const newArray = []
    // list.map((item) => {
    //   if (item.id === id) {
    //     newArray.push({
    //       id: item.id,
    //       name: item.name,
    //       complete: !item.complete
    //     })
    //   } else {
    //     newArray.push(item)
    //   }
    // })
    // setList(newArray)
    // PATCH update to db  
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
          <li key={item.id} className={item.complete ? 'completed' : ''}>
            <input className="toggle" type="checkbox" checked={item.complete} onChange={() => toggleComplete(item.id, item.complete)} value={item.id} />
            {item.name} <button onClick={() => clickDelete(item.id)} >Delete</button></li>
        )}
      </ul>
      <p id="footer">&copy; 2021 <a href="https://github.com/krisjwood/aws-shopping-list">Kris Wood</a></p>
    </>
  )
}

export default App;
