import React from 'react'
import Count from './components/Count'
import TodoList from './components/TodoList'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'

export default function App() {
  return (
    <div>App
      {/*
        tại sao lại dùng redux-toolkit thay vì dùng redux 
        1. đối với redux thì khởi tạo store thì trong các hàm reducer thường tách ra các action các hàm reducer
        sẽ tính toán trả về state mới dựa vào action truyền lên
        2. còn đối với redux-toolkit viết code sẽ gọn hơn tại vì những action render sẽ được viết gộp 
        3. khi dùng redux thường thì muốn xử lí các tác vụ bất đồng bộ API 
        gọi tới server sẽ cài thêm thư viện redux-thunk  
       */}
      <Count></Count>
      <TodoList></TodoList>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
    </div>
  )
}
