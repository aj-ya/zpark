import React, { useState, useRef } from "react";
import axios from "axios";
import Field from "./FormTemplate";
import LogoutBtn from "./LogoutBtn";

function IndDetails(val) {
  return (
    <tr className="UserDetailsRow" key={val.rfid}>
      <td> {val.rfid} </td>
      <td> {val.username} </td>
      <td> {val.car} </td>
      <td> {val.charge} </td>
      <td> {val.bal} </td>
    </tr>
  );
}
function AllDetails(allCars = []) {
  return (
    <div className="table-container">
      <table id="users" style={{ display: "none" }}>
        <thead>
          <tr>
            <th>RFID</th>
            <th>UserName</th>
            <th>Car</th>
            <th>Charge</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {allCars.map((val) => {
            return IndDetails(val);
          })}
        </tbody>
      </table>
    </div>
  );
}
function RFID() {
  let [carList, setCarList] = useState([]);
  let rfidRef = useRef();
  let carRef = useRef();
  let balanceRef = useRef();
  let chargeRef = useRef();
  let usernameRef = useRef();

  const submitPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/insert", {
        rfid: rfidRef.current.value,
        username: usernameRef.current.value,
        car: carRef.current.value,
        charge: chargeRef.current.value,
        bal: balanceRef.current.value,
      })
      .then(() => {
        console.log("success");
      });
  };

  const getDetails = () => {
    axios.get("http://localhost:3001/get").then((response) => {
      setCarList(response.data);
    });
  };
  let [dispBtn, setDisp] = useState(true);
  return (
    <div className="wrapper">
      <LogoutBtn />
      <form className="auth-form form-border" onSubmit={submitPost}>
        <Field ref={rfidRef} type="text" label="RFID" />
        <Field ref={usernameRef} type="text" label="Username" />
        <Field ref={carRef} type="text" label="Car" />
        <Field ref={chargeRef} type="text" label="Charge" />
        <Field ref={balanceRef} type="text" label="Balance" />
        <div className="auth-btn-wrapper">
          <button className="btn btn-pushable auth-btn" type="submit">
            <span className="btn-front">Submit</span>
          </button>
        </div>
      </form>
      <button
        className="btn btn-pushable"
        style={{ marginTop: "25px" }}
        onClick={() => {
          getDetails();
          if (dispBtn === true) {
            document.getElementById("users").style.display = "table";
            document.getElementsByClassName("form-border")[0].style.display =
              "none";
            document.getElementsByClassName("change-text")[0].innerHTML =
              "Hide Users";
          } else {
            document.getElementById("users").style.display = "none";
            document.getElementsByClassName("form-border")[0].style.display =
              "block";
            document.getElementsByClassName("change-text")[0].innerHTML =
              "Show Users";
          }
          setDisp(!dispBtn);
        }}
      >
        <span className="btn-front change-text">Show Users</span>
      </button>
      {AllDetails(carList)}
    </div>
  );
}
export default RFID;
