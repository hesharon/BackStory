import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = process.env.NODE_ENV === "production"
  ? "https://backstory-backend.onrender.com"
  : "http://localhost:8000";

// Async thunk for fetching user
export const fetchUser = createAsyncThunk("user/fetchUser", async (email) => {
  const res = await axios(`${BACKEND_URL}/users/${email}`);
  const data = await res.data;
  return data;
});

// Async thunk for updating user bio
export const updateUserBio = createAsyncThunk(
  "user/updateUserBio",
  async ({ email, newBio, profileImg }) => {
    const response = await axios.put(`${BACKEND_URL}/users/${email}`, {
      bio: newBio,
      profileImg: profileImg,
    });
    const data = await response.data;
    return data;
  },
);

const userSlice = createSlice({
  name: "user",
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
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const {
          _id,
          username,
          friends,
          collections,
          photos,
          email,
          bio,
          profileImg,
        } = action.payload;
        state.loading = false;
        state._id = _id;
        state.username = username;
        state.friends = friends;
        state.collections = collections;
        state.photos = photos;
        state.email = email;
        state.bio = bio;
        state.profileImg = profileImg;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserBio.fulfilled, (state, action) => {
        state.bio = action.payload.bio;
      });
  },
});

export default userSlice.reducer;
