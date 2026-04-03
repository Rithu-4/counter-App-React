
import ReactDOM from 'react-dom/client';
import {useState } from 'react';
import './style.css';

function Counter(){
  var [count, setCount] = useState(0);
  
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }
  return(
    
    <div className="container">
      <h1 className="count">{count}</h1>
    
      {/* Conditional Rendering */}
      {count === 0 && <p className="message">Minimum limit reached</p>}
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter />

);

