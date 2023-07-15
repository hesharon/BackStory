import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchPhotoIds = createAsyncThunk(
  'user/fetchPhotoIds',
  async email => {
    const res = await axios(`/photos/user/${email}`)
    const data = await res.data
    return data
  }
)

export const addPhoto = createAsyncThunk(
  'user/addPhoto',
  async (photoDetails) => {
    const res = await axios.post('/photos', photoDetails)
    const data = await res.data
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    photoIds: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotoIds.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPhotoIds.fulfilled, (state, action) => {
        state.loading = false
        state.photoIds = action.payload
      })
      .addCase(fetchPhotoIds.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      });
  }
});

export default userSlice.reducer;
