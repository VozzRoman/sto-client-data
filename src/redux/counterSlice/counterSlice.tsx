import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counterTire',
  initialState: {
    counter: 0,
  },

  reducers: {
   counterTireRedux(state, action) {
      state.counter = action.payload;
    },
	 resetCounter(state) {
		state.counter = 0
	 }

  },
});

export const { counterTireRedux, resetCounter} = counterSlice.actions;

export default counterSlice.reducer;