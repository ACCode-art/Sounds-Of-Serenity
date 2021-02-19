import { Avatar, Slider } from "@material-ui/core";
import {
  AirlineSeatFlat,
  LocalConvenienceStoreOutlined,
  Pause,
  PlayCircleFilled,
  Repeat,
  VolumeUp,
} from "@material-ui/icons";
import React, { useContext, useRef, useState, useEffect } from "react";
import "./Nav.css";
import { MainContext } from "../context/MainContext";

function Nav() {
  const { currentSong, togglePlaying, src, playing } = useContext(MainContext);

  const audio = useRef("audio_tag");

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const [currentTime, setCurrentTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [statevolum, setStateVolum] = useState(0.5);

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  return (
    <div className="nav">
      <audio
        autoPlay
        src=""
        ref={audio}
        src={src}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
      ></audio>
      <div className="nav__left">
        <AirlineSeatFlat />

        <p>
          Now Playing: <span>{currentSong}</span>
        </p>
      </div>
      <div className="nav__middle">
        <div className="nav__middleTop">
          <Repeat className="smallIcons" />
          <span>
            <PlayCircleFilled
              onClick={() => {
                togglePlaying();
                toggleAudio();
              }}
            />
          </span>
          <Pause className="smallIcons" />
        </div>
        <div className="nav__middleMid">
          <input type="range" />
          <VolumeUp className="smallIcons" />
        </div>
      </div>
      <div className="nav__right">
        <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdch81km8r5tow.cloudfront.net%2Fwp-content%2Fuploads%2F2019%2F02%2FCover-photo-of-Limmy-copy.jpg&f=1&nofb=1" />
      </div>
    </div>
  );
}

export default Nav;
