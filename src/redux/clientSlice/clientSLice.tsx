import { createSlice } from "@reduxjs/toolkit"
import { addClient, fetchAllClients, findByIdClient, removeClient, searchClient } from "../operations";
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
	query: '',
}

export const clientSLice = createSlice ({
	name:"clients",
	initialState,
	reducers:{
		clienFilter(state, actions) {
			state.filtered = state.clients.filter(item => 
				item.registrationNumber_1.includes(actions.payload) || 
				item.registrationNumber_2.includes(actions.payload) ||
				item.phone_1.includes(actions.payload) ||
				item.phone_2.includes(actions.payload) ||
				item.phone_3.includes(actions.payload) ||
				item.carModel_1.includes(actions.payload) ||
				item.carModel_2.includes(actions.payload)
				)
		},
		setQuery(state, action) {
			state.query = action.payload;
		}
	},
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
			console.log("act", actions.payload);
			state.isLoading = false;
			state.clients = [...state.clients, actions.payload];
			state.error = null;
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
			state.clients = state.clients.filter(item => item.id !== actions.payload.id);
			state.error = null;
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
		//Search
		.addCase(searchClient.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(searchClient.fulfilled, (state, actions) => {
			console.log("actSearch", actions.payload);
			state.isLoading = false;
			state.filtered = actions.payload
			state.error = null;
		})
		
	}

})

export const {clienFilter, setQuery} = clientSLice.actions
export default clientSLice.reducer;