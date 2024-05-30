import { createSlice } from "@reduxjs/toolkit"
import { addSoldTire, fetchAllSoldTire, removeSoldTire, } from "../operations";
import { SoldStorageI } from "../../types/types";


interface SoldTires {
	soldTire: SoldStorageI[],
	current: SoldStorageI | null,
	isLoading: boolean,
	error: string | null,
	
	
}

const initialState: SoldTires = {
	soldTire:[],
	current: null,
	isLoading: false,
	error: null,
}

export const soldSLice = createSlice ({
	name:"soldStorage",
	initialState,
	reducers:{},
	extraReducers:(bulider) => {
		bulider
		//get
		.addCase(fetchAllSoldTire.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(fetchAllSoldTire.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.soldTire = actions.payload;
			state.error = null;
		})
		.addCase(fetchAllSoldTire.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//add
		.addCase(addSoldTire.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(addSoldTire.fulfilled, (state, actions) => {
			console.log("act", actions.payload);
			state.isLoading = false;
			state.error = null;
			state.soldTire = [...state.soldTire, actions.payload];
	
		})
		.addCase(addSoldTire.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		// Remove
		.addCase(removeSoldTire.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(removeSoldTire.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.soldTire = state.soldTire.filter(item => item._id !== actions.payload._id);
		})
		.addCase(removeSoldTire.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		
		
	}

})


export default soldSLice.reducer;