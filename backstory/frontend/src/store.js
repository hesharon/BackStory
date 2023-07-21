import { collectionsReducer } from './reducers/collections';
import { configureStore } from '@reduxjs/toolkit';
import { photosReducer } from './reducers/photos';
import userReducer from './slices/photos'
import thunk from 'redux-thunk';

const reducer = {
  photos: photosReducer,
  collections: collectionsReducer,
  user: userReducer
}

const store = configureStore({
  reducer,
  middleware: [thunk]
});


export default store;
