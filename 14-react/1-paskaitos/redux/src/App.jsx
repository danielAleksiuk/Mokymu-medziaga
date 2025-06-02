
import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  }

  const decrement = () => {
    setCount(prevState => prevState - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='counter'>
      <h1>
        <input type='number' disabled value={count}/>
      </h1>
      <div>
        <button className='btn incBtn' onClick={increment}>+</button>
        <button className='btn decBtn' onClick={decrement}>-</button>
      </div>
      <div>
        <button className='btn resetBtn' onClick={reset}>reset</button>
      </div>
    </div>
  )
}

export default App

