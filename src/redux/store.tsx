import { configureStore } from "@reduxjs/toolkit";
import clientReducer from './clientSlice/clientSLice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
clientReducer
})


export const store = configureStore({
	reducer: rootReducer,
})

//ДЛя типизации selector
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;