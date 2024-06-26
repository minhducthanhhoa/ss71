import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/reducers/TodoListReducer';

export default function TodoList() {
    const data:any = useSelector(state=>state);
    console.log("1111",data);
    const disPatch = useDispatch();
    const addTodoList = ()=>{
        let newJob:any={
            Id:Math.floor(Math.random()*999999),
            name:"code redux"
        }
        disPatch(addTodo(newJob))
    }
  return (
    <div>TodoList
        <button onClick={addTodoList}>add</button>
        <ul>
            {data.todoListReducer.jobs.map((job:any) => {
                return <li key={job.id}>{job.name}</li>
            })}
        </ul>
        
    </div>
  )
}
