import { Clear } from "@material-ui/icons";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import "./PopUp.css";
import Track from "./Track";

function PopUp() {
  const { show, setShow, liked } = useContext(MainContext);
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

      {liked.map((like) => (
        <Track title={like.title} background={like.img} src={like.src} />
      ))}
    </div>
  );
}

export default PopUp;
