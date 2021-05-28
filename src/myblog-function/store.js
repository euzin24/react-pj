import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice from './features/categorySlice';
import contentSlice from './features/contentSlice';

const reducers = combineReducers({
    category: categorySlice,
    content: contentSlice
})

export const store = configureStore({
    reducer:{
        rootReducer:reducers
    }
});