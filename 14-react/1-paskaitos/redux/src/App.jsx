
// import { useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  // let [count, setCount] = useState(0);

  const increment = () => {
    dispatch({type: 'INCREMENT'});
    // setCount(prevState => prevState + 1);
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'})
    // setCount(prevState => prevState - 1);
  }

  const reset = () => {
    dispatch({type: 'RESET'})
    // setCount(0);
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

