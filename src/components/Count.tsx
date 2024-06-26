import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease } from '../store/reducers/countReducer';

export default function Count() {
    // lấy dữ liệu từ kho
    const data:any = useSelector(state=>state);
    console.log(data);
    const disPatch = useDispatch();
    const handleIncrease = ()=>{
        disPatch(increase());

    }
    const handleDecrease = ()=>{
        disPatch(decrease());
    }
  return (
    <div>Count
        <p>Giá trị biến count: {data.countReducer.count}</p>
        <button onClick={handleIncrease}>Tăng</button>
        <button onClick={handleDecrease}>Giảm</button>
    </div>
  )
}
