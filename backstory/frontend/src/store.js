import { collectionsReducer } from './reducers/collections';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './slices/user'

const reducer = {
  collections: collectionsReducer,
  user: userReducer
}

const store = configureStore({
  reducer,
  middleware: [thunk]
});


export default store;
