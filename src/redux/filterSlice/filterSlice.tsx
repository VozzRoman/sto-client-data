import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
	 tireStoreFilter:'',
  },

  reducers: {
    filteredValue(state, action) {
      state.filter = action.payload;
    },
	 filteredStoreValue(state, action) {
      state.tireStoreFilter = action.payload;
    },
  },
});

export const { filteredValue, filteredStoreValue } = filterSlice.actions;

export default filterSlice.reducer;