import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decremenet } from './actions'

function App() {

  const counter = useSelector(state => state.counter); // we wanna access to counter state , so that we used useSelector
  const dispatch = useDispatch(); // dispatch allows to call action and then after that state will change !

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decremenet())}>-</button>
    </div>
  );
}

export default App;
