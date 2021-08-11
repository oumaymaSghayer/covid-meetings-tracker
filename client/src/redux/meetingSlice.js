import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMeeting = createAsyncThunk(
  "meetings/create",
  async (meeting) => {
    return axios.post(
      `${process.env.REACT_APP_SERVER_URL}/meetings/create`,
      meeting
    );
  }
);

export const getAllMeetings = createAsyncThunk("meetings/get", async () => {
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/meetings`);
});

export const meetingSlice = createSlice({
  name: "meeting",
  initialState: [],
  reducers: {
    removeMeeting: () => {
      return {};
    },
    filterMeetingsByName: (state, action) => {
      let result = state.filter((e) =>
        e.person.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state = result;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMeeting.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(addMeeting.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(getAllMeetings.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state = action.payload.data;
      return state;
    });
  },
});
export const { removeMeeting, filterMeetingsByName } = meetingSlice.actions;
export default meetingSlice.reducer;
