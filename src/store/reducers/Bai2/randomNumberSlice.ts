import { createSlice } from '@reduxjs/toolkit';

const initialState: number[] = [];

const randomNumberSlice = createSlice({
  name: 'randomNumbers',
  initialState,
  reducers: {
    addRandomNumber: (state) => {
      const randomNumber = Math.floor(Math.random() * 100);
      state.push(randomNumber);
    },
  },
});

export const { addRandomNumber } = randomNumberSlice.actions;
export default randomNumberSlice.reducer;
