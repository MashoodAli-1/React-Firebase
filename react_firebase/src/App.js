import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const { cart } = useSelector((state) => state);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { itemList } = useSelector((state) => state.cart);

  const sendRequest = async () => {
    const res = await fetch(
      "https://react-redux-77a66-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    const data = res.json();
    return data;
  };

  useEffect(() => {
    const data = sendRequest();
  }, [cart]);
  console.log(itemList);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
