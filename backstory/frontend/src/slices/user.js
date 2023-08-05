import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async email => {
    const res = await axios(`users/${email}`)
    const data = await res.data
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: "",
    username: "",
    friends: [],
    collections: [],
    photos: [],
    email: "",
    bio: "",
    profileImg: "",
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { _id, username, friends, collections, photos, email, bio, profileImg } = action.payload
        state.loading = false
        state._id = _id
        state.username = username
        state.friends = friends
        state.collections = collections
        state.photos = photos
        state.email = email
        state.bio = bio
        state.profileImg = profileImg
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      });
  }
});

export default userSlice.reducer
