import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    filteredValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredValue } = filterSlice.actions;

export default filterSlice.reducer;