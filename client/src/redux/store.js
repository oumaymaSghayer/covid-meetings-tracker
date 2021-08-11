import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import meetingReducer from "./meetingSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    meeting: meetingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
