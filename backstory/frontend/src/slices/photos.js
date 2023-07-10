import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}

export const fetchPhotoIds = createAsyncThunk(
  'user/fetchPhotoIds',
  async (username) => {
    const res = await axios(`http://localhost:8000/photos/user/${username}`)
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
        state.loading = true;
      })
      .addCase(fetchPhotoIds.fulfilled, (state, action) => {
        state.loading = false;
        state.photoIds = action.payload;
      })
      .addCase(fetchPhotoIds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
