import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import {fatchData, sendCartData} from "./store/cart-action"




let isFirtRender = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(()=>{
    dispatch(fatchData(cart));
  },[dispatch])

  useEffect(() => {
    if (isFirtRender) {
      console.log("sghas");
      isFirtRender = false;
      return ;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
      
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} massage={notification.massage} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
