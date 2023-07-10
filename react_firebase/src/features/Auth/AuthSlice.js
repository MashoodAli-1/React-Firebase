import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

//? redux toolkit use immer library to mutate the state by creating new copy

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
