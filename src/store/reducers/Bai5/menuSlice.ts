import { createSlice } from '@reduxjs/toolkit';

const initialState = 'expanded';

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => (state === 'expanded' ? 'collapsed' : 'expanded'),
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
