import React, { useContext } from "react";
import "./RecentlyAdded.css";
import Track from "./Track";
import { MainContext } from "../context/MainContext";
import Titles from "./Titles";

function RecentlyAdded() {
  const { songs } = useContext(MainContext);
  return (
    <div className="recentlyAdded">
      <h1>Recently Added</h1>
      <Titles />
      {songs.map((song, i) => (
        <Track
          key={i}
          src={song.src}
          title={song.title}
          length={song.length}
          release={song.release}
          background={song.background}
        />
      ))}
    </div>
  );
}

export default RecentlyAdded;
