// import { createStore } from 'redux';  senas budas
import { configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './counterReducers';

// export const store = createStore(counterReducer); senas budas

// naujas budas
export const store = configureStore({reducer: counterReducer})