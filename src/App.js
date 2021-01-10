import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5050/api/items', {withCredentials: true})
    .then((response) => {
        console.log('response: ', response.data)
        setItems(response.data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Ecommerce front</h1>
      {
        items.map((item, i) => {
          return <h2 key={i}>{item.name}</h2>
        })
      }
    </div>
  );
}

export default App;
