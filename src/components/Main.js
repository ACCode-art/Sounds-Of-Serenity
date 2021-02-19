import React from "react";
import Hero from "./Hero";
import "./Main.css";
import RecentlyAdded from "./RecentlyAdded";

function Main() {
  return (
    <div className="main">
      <Hero />
      <RecentlyAdded />
      <RecentlyAdded />
      <RecentlyAdded />
    </div>
  );
}

export default Main;
