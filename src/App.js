import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>


      {isLogged ? <h1>valuable information I shouldn't see if I'm not logged in.</h1>: ''}
    </div>
  );
}

export default App;
