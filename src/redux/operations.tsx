
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CLientI, SoldStorageI, TireStorageI } from "../types/types";

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


//tireStoreOperations

export const fetchAllTires = createAsyncThunk<TireStorageI[], undefined>('fetch/tires', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/tiresStore');
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			
			return thunkAPI.rejectWithValue('rejectedGet');
		}
		
	}
})

export const addTire = createAsyncThunk<TireStorageI, TireStorageI>('add/tire', async (data, thunkAPI) => {
	try {
		const response = await axios.post('/tiresStore', data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedAdd');
		}
		
	}
})

export const removeTire = createAsyncThunk<TireStorageI, string>('remove/tire', async (id: string, thunkAPI) => {
	try {
		const response = await axios.delete(`/tiresStore/${id}`);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})

export const findByIdTire = createAsyncThunk<TireStorageI, string>('findById/tire', async (id: string, thunkAPI) => {
	
	try {
		const response = await axios.get(`/tiresStore/${id}`);
		
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})

export const updateTire = createAsyncThunk<TireStorageI, TireStorageI>('updateClient/tire', async (data, thunkAPI) => {
	try {
		const response = await axios.put(`/tiresStore/${data.id}`, data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedUpdate');
		}
		
	}
})

//SoldStoreage-------------------

export const fetchAllSoldTire = createAsyncThunk<SoldStorageI[], undefined>('fetch/soldTires', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/soldTires');
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			
			return thunkAPI.rejectWithValue('rejectedGet');
		}
		
	}
})

export const addSoldTire = createAsyncThunk<SoldStorageI, SoldStorageI>('add/soldTire', async (data, thunkAPI) => {
	try {
		const response = await axios.post('/soldTires', data);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedAdd');
		}
		
	}
})

export const removeSoldTire = createAsyncThunk<TireStorageI, string>('remove/soldTire', async (id: string, thunkAPI) => {
	try {
		const response = await axios.delete(`/soldTires/${id}`);
		return response.data;
	} catch (error) {
		if(error instanceof Error){
			return thunkAPI.rejectWithValue('rejectedRemove');
		}
		
	}
})