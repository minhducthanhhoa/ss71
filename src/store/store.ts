import  counterSlice  from "./reducers/Bai1/counterSlice";
import TodoListReducer from "./reducers/TodoListReducer";
import countReducer from "./reducers/countReducer";
import { configureStore } from "@reduxjs/toolkit";
import randomNumberSlice from "./reducers/Bai2/randomNumberSlice";
import themeSlice from "./reducers/Bai3/themeSlice";
import displayModeSlice from "./reducers/Bai4/displayModeSlice";
import menuSlice from "./reducers/Bai5/menuSlice";
import languageSlice from "./reducers/Bai6/languageSlice";

const store = configureStore({
    reducer:{
        countReducer,
        TodoListReducer,
        counterSlice,
        randomNumberSlice,
        themeSlice,
        displayModeSlice,
        menuSlice,
        languageSlice
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;