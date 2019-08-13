import React from 'react';
import {useDispatch} from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({type: 'SUB'})}>-</button>
      <button onClick={() => dispatch({type: 'ADD'})}>+</button>
    </div>
  );
}
