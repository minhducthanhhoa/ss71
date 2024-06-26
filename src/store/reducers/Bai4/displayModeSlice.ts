import { createSlice } from '@reduxjs/toolkit';

const initialState = 'list';

const displayModeSlice = createSlice({
  name: 'displayMode',
  initialState,
  reducers: {
    toggleMode: (state) => (state === 'list' ? 'grid' : 'list'),
  },
});

export const { toggleMode } = displayModeSlice.actions;
export default displayModeSlice.reducer;
