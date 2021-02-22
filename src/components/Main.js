import React, { useState, useContext } from "react";
import Hero from "./Hero";
import "./Main.css";
import RecentlyAdded from "./RecentlyAdded";
import { MainContext } from "../context/MainContext";
import PopUp from "./PopUp";

function Main() {
  const { searchTerm, setSearchTerm } = useContext(MainContext);

  return (
    <div className="main">
      <PopUp />
      <Hero />
      <div className="main__input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <RecentlyAdded />
      <RecentlyAdded />
      <RecentlyAdded />
    </div>
  );
}

export default Main;
