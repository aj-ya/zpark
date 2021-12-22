import e from "express";
import React from "react";
import { Navigate } from "react-router-dom";

function NavigateLog(props) {
  if (props.isLoggedIn) {
    if (window.localStorage.getItem("username") === "admin") {
      return <Navigate to="/RFID" />;
    } else return <Navigate to="/Home" />;
  } else return <Navigate to="/MainMenu" />;
}
export default NavigateLog;
