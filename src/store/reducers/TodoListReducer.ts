import { createSlice } from "@reduxjs/toolkit";




const todoListReducer = createSlice({
    name:"todoListReducer",
    initialState:{
      jobs:[
          {
             id:1,
             name:"học lập trình"
          },
          {
            id:1,
            name:"redux"
         },
         {
          id:1,
          name:"cầu lông"
          },
      ]
    },
    reducers:{
        addTodo:(state:any,action:any)=>{
            state.jobs.push(action.payload);
        }
    }
})
export const {addTodo} = todoListReducer.actions;
export default todoListReducer.reducer