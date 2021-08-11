import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("user/create", async (name) => {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/users/create`, {
    name,
  });
});

export const getAllUsers = createAsyncThunk("users/get", async () => {
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
});

export const usersSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    removeUser: () => {
      return "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload.data._id);
      state = action.payload.data._id;
      localStorage.setItem("user", action.payload.data._id);
      return state;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log(action.payload.data);
    });
  },
});
export const { removeUser } = usersSlice.actions;
export default usersSlice.reducer;
