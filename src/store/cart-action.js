import { cartActions } from "./cart-clice";
import { uiActions } from "./ui-slice";

export const fatchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-faf45-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          massage: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        massage: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-faf45-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          massage: "Sent Request TO Database Succesfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      sendRequest().catch((err) => {
        dispatch(
          uiActions.showNotification({
            open: true,
            massage: "Sending Request failed",
            type: "error",
          })
        );
      });
    }
  };
};
