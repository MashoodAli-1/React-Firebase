import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../features/Notification/notificationSlice";
const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.notification);
  const handleClose = () => {
    dispatch(
      showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification && notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
