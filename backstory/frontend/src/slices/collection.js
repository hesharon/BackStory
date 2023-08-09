import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchCollections = createAsyncThunk(
    'collections/fetchCollections',
    async email => {
      const res = await axios(`users/${email}/collections`)
      const data = await res.data
      return data
    }
  )
  
  export const addCollection = createAsyncThunk(
    'collections/addCollection',
    async (collectionDetails) => {
      const res = await axios.post(`/users/${collectionDetails.email}/collections`, { title: collectionDetails.title })
      const data = await res.data
      return data
    }
  )
  
  export const updateCollection = createAsyncThunk(
    'collections/updateCollection',
    async (collectionDetails) => {
      const res = await axios.put(`/users/${collectionDetails.email}/collections/${collectionDetails.collectionId}`, { photos: collectionDetails.photos })
      const data = await res.data
      return data
    }
  )
  
  export const deleteCollection = createAsyncThunk(
    'collections/deleteCollection',
    async (collectionDetails) => {
      const res = await axios.delete(`/users/${collectionDetails.email}/collections/${collectionDetails.collectionId}`)
      const data = await res.data
      return data
    }
  )
  

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
      collections: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCollections.pending, (state) => {
          state.loading = true
        })
        .addCase(fetchCollections.fulfilled, (state, action) => {
          state.loading = false
          state.collections = action.payload
        })
        .addCase(fetchCollections.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        });
    }
  });
  
  export default collectionsSlice.reducer;
  