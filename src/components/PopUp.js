import { Clear } from "@material-ui/icons";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import "./PopUp.css";

function PopUp() {
  const { show, setShow } = useContext(MainContext);
  return (
    <div
      className="popUp"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="popUp__top">
        <h3>Liked Tracks</h3>
        <Clear onClick={() => setShow(false)} />
      </div>

      <div className="popUp__track">
        <img
          src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>Track 1</p>
      </div>
      <div className="popUp__track">
        <img
          src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>Track 1</p>
      </div>
      <div className="popUp__track">
        <img
          src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>Track 1</p>
      </div>
    </div>
  );
}

export default PopUp;
