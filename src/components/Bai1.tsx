import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,reset } from '../store/reducers/Bai1/counterSlice';
export default function Bai1() {
    const count:any = useSelector((state=>state))
    const dispatch = useDispatch();
  return (
    <div>Bai1
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
