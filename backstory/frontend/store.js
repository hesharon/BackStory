import { collectionsReducer } from './reducers/collections';
import { configureStore } from '@reduxjs/toolkit';
import { photosReducer } from './reducers/photos';

const reducer = {
    photos: photosReducer,
    collections: collectionsReducer

}

const store = configureStore({
    reducer
});


export default store;