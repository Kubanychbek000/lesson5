import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState(
      {
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
      }
  )

  return (

      <>
      <div>
        <form >
          <div>
            <label>key1:</label>
            <input type="text"value={formData.key1}/>
          </div>
          <div>
            <label>key2:</label>
            <input type="text"value={formData.key2}/>
          </div>
          <div>
            <label>key3:</label>
            <input type="text"value={formData.key3}/>
          </div>
          <div>
            <label>key4:</label>
            <input type="text"value={formData.key4}/>
          </div>
        </form>

        <div>
          <p>Список данных</p>
          <p>{`key1:${formData.key1}`}</p>
          <p>{`key2:${formData.key2}`}</p>
          <p>{`key3:${formData.key3}`}</p>
          <p>{`key4:${formData.key4}`}</p>
        </div>

      </div>
      </>

  )
}

export default App
