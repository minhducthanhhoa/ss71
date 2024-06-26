import { createSlice } from '@reduxjs/toolkit';

const initialState = 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchToEnglish: () => 'en',
    switchToVietnamese: () => 'vi',
  },
});

export const { switchToEnglish, switchToVietnamese } = languageSlice.actions;
export default languageSlice.reducer;
