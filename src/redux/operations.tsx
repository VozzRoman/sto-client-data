
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CLientI } from "../types/types";
axios.defaults.baseURL = "http://192.168.31.230:5050/";


export const fetchAllClients = createAsyncThunk<CLientI[], undefined>('fetch/clients', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/clients');
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			
			return thunkAPI.rejectWithValue('rejectedGet');
		}
		
	}
})

export const addClient = createAsyncThunk<CLientI, CLientI>('add/client', async (data, thunkAPI) => {
	try {
		const response = await axios.post('/clients', data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedAdd');
		}
		
	}
})

export const removeClient = createAsyncThunk<CLientI, string>('remove/client', async (id: string, thunkAPI) => {
	try {
		const response = await axios.delete(`/clients/${id}`);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})

export const findByIdClient = createAsyncThunk<CLientI, string>('findById/client', async (id: string, thunkAPI) => {
	
	try {
		const response = await axios.get(`/clients/${id}`);
		
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})

export const searchClient = createAsyncThunk('search/client', async (query: string, thunkAPI) => {
	try {
		const response = await axios.get(`/clients?registrationNumber_1=${query}`);
		console.log("SearchResponse",response.data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})

export const updateClient = createAsyncThunk<CLientI, CLientI>('updateClient/client', async (data, thunkAPI) => {
	try {
		const response = await axios.put(`/clients/${data.id}`, data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedUpdate');
		}
		
	}
})