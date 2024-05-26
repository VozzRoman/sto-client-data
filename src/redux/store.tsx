import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './clientSlice/clientSLice';
import filterReducer from './filterSlice/filterSlice';
import tireReducer from './tireStoreSlice/tireStoreSlice';
import counterReducer from './counterSlice/counterSlice';
import soldreducer from './soldSlice/soldSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
clientReducer,
tireReducer,
filterReducer,
counterReducer,
soldreducer,
})


export const store = configureStore({
	reducer: rootReducer,
})

//ДЛя типизации selector
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;