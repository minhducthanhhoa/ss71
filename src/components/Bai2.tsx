import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { addRandomNumber } from '../store/reducers/Bai2/randomNumberSlice';

export default function Bai2() {
    const numbers = useSelector((state: RootState) => state.randomNumberSlice);
    const dispatch: AppDispatch = useDispatch();
  return (
    <div>Bai2
         <h1>List number: {JSON.stringify(numbers)}</h1>
         <button onClick={() => dispatch(addRandomNumber())}>Random number</button>
    </div>
  )
}
