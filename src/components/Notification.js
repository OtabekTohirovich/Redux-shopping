import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, massage }) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {massage}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
