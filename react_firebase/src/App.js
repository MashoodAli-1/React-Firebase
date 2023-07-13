import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { showNotification } from "./features/Notification/notificationSlice";

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { itemList } = useSelector((state) => state.cart);
  const { notification } = useSelector((state) => state.notification);

  const sendRequest = async () => {
    dispatch(
      showNotification({
        open: true,
        message: "sending request",
        type: "warning",
      })
    );
    const res = await fetch(
      "https://react-redux-77a66-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    const data = res.json();
    dispatch(
      showNotification({
        open: true,
        message: "sent request to firebase successfully",
        type: "success",
      })
    );
    return data;
  };

  useEffect(() => {
    const data = sendRequest().catch((err) => {
      dispatch(
        showNotification({
          open: true,
          message: "error sending request fails",
          type: "error",
        })
      );
    });
  }, [cart]);
  console.log(itemList);
  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
