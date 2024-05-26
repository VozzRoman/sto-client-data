import { createSlice } from "@reduxjs/toolkit";
import { TireStorageI } from "../../types/types";
import { addTire, fetchAllTires, findByIdTire, removeTire, updateTire } from "../operations";

interface TireStoke {
	tires: TireStorageI[],
	current: TireStorageI | null,
	isLoading: boolean,
	error: string | null,
	filtered: TireStorageI[],
}

const initialState: TireStoke = {
	tires: [],
	current: null,
	isLoading: false,
	error: null,
	filtered: [],
}


export const tireStoreSlice = createSlice({
	name: "tiresStoke",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		//GetTire
		.addCase(fetchAllTires.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(fetchAllTires.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.tires = actions.payload;
			state.error = null;
		})
		.addCase(fetchAllTires.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//AddTire
		.addCase(addTire.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(addTire.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.tires = [...state.tires, actions.payload];
			state.error = null;
		})
		.addCase(addTire.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//Remove
			.addCase(removeTire.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(removeTire.fulfilled, (state, actions) => {
				state.isLoading = false;
				state.tires = state.tires.filter(item => item.id !== actions.payload.id);
				state.error = null;
			})
			.addCase(removeTire.rejected, (state, actions) => {
				state.isLoading = false;
				if(typeof actions.payload === "string"){
					state.error = actions.payload;
				}
			})
		//Find
				.addCase(findByIdTire.pending, (state) => {
					state.isLoading = true;
					state.error = null;
				})
				.addCase(findByIdTire.fulfilled, (state, actions) => {
					state.isLoading = false;
					state.current = actions.payload;
					state.error = null;
				})
				.addCase(findByIdTire.rejected, (state, actions) => {
					state.isLoading = false;
					if(typeof actions.payload === "string"){
						state.error = actions.payload;
					}
				})
						//Update
		.addCase(updateTire.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(updateTire.fulfilled, (state, actions) => {
			console.log('Update', actions.payload);
			state.isLoading = false;
			state.tires = state.tires.map(item => {
				if(item.id === actions.payload.id){
					return actions.payload;
				}
				return item;
			})
			state.error = null;
		})
		.addCase(updateTire.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
	}
})


export default tireStoreSlice.reducer;