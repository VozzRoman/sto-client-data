import { createSlice } from "@reduxjs/toolkit"
import { addClient, fetchAllClients, findByIdClient, removeClient, updateClient } from "../operations";
import { CLientI } from "../../types/types";


interface ClientState {
	clients: CLientI[],
	current: CLientI | null,
	isLoading: boolean,
	error: string | null,
	filtered: CLientI[],
	
}

const initialState: ClientState = {
	clients:[],
	current: null,
	isLoading: false,
	error: null,
	filtered: [],
	
}

export const clientSLice = createSlice ({
	name:"clients",
	initialState,
	reducers:{},
	extraReducers:(bulider) => {
		bulider
		//get
		.addCase(fetchAllClients.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(fetchAllClients.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.clients = actions.payload;
			state.error = null;
		})
		.addCase(fetchAllClients.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//add
		.addCase(addClient.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(addClient.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.error = null;
			state.clients = [actions.payload, ...state.clients];
	
		})
		.addCase(addClient.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//Remove
		.addCase(removeClient.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(removeClient.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.clients = state.clients.filter(item => item._id !== actions.payload._id);
	
		})
		.addCase(removeClient.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//Find
		.addCase(findByIdClient.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(findByIdClient.fulfilled, (state, actions) => {
			state.isLoading = false;
			state.current = actions.payload;
			state.error = null;
		})
		.addCase(findByIdClient.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		//Update
		.addCase(updateClient.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(updateClient.fulfilled, (state, actions) => {
			console.log('Update', actions.payload);
			state.isLoading = false;
			state.clients = state.clients.map(item => {
				if(item._id === actions.payload._id){
					return actions.payload;
				}
				return item;
			})
			state.error = null;
		})
		.addCase(updateClient.rejected, (state, actions) => {
			state.isLoading = false;
			if(typeof actions.payload === "string"){
				state.error = actions.payload;
			}
		})
		
	}

})

export default clientSLice.reducer;