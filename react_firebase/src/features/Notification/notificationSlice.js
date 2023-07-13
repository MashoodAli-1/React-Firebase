import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {},
};

//? redux toolkit use immer library to mutate the state by creating new copy

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const { showNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
