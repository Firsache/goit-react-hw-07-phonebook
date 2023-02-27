import { createSlice } from '@reduxjs/toolkit';

const initialGlobalState = {
  themeTitle: 'light',
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    toggleThemeTitle(state) {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleThemeTitle } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
