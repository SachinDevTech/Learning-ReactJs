import { useState } from 'react'
import './App.css'

function App() {
  //count is a state variable.
  //setCount is a state function which changes value of count on some event.
  //here initial value set to 0
  const [count, setCount] = useState(0);


  // we also can pass directly in onClick = {()=>setCount(count+1)}
  function incCount() {
    setCount(count+ 1);
  }

  return (
      <div className='counter'>
        <h1>Using useState hook:</h1>
        <h3>You clicked button {count} times.</h3>
        <button onClick={incCount}>
          Click Me
        </button>
      </div>
  )
}

export default App
