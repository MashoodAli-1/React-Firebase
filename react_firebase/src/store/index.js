import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice";
import cartReducer from "../features/cart/CartSlice";
import notificationReducer from "../features/Notification/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
