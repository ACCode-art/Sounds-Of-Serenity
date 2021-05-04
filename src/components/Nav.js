import { Avatar, Slider } from '@material-ui/core';
import {
  AirlineSeatFlat,
  Favorite,
  LocalConvenienceStoreOutlined,
  Pause,
  PauseCircleFilled,
  PlayCircleFilled,
  Repeat,
  VolumeUp,
} from '@material-ui/icons';
import React, { useContext, useRef, useState, useEffect } from 'react';
import './Nav.css';
import { MainContext } from '../context/MainContext';
import logo from '../img/logo.png';

function Nav() {
  const { currentSong, togglePlaying, src, playing, setShow } = useContext(
    MainContext
  );

  const audio = useRef('audio_tag');

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

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  };

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
        <img src={logo} alt="" />

        <Favorite className="nav__leftLiked" onClick={() => setShow(true)} />
      </div>
      <div className="nav__middle">
        <div className="nav__middleTop">
          <span className={!playing ? '' : 'hide'}>
            <PlayCircleFilled
              onClick={() => {
                togglePlaying();
                toggleAudio();
              }}
            />
          </span>
          <span className={!playing ? 'hide' : ''}>
            <PauseCircleFilled
              className="smallIcons"
              onClick={() => {
                togglePlaying();
                toggleAudio();
              }}
            />
          </span>
        </div>
        <div className="nav__middleMid">
          <p>{fmtMSS(currentTime)}</p>
          <input
            type="range"
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0}
          />
          <p>{fmtMSS(dur)}</p>
        </div>
        <div className="nav__middleBottom">
          <p>{currentSong}</p>
        </div>
      </div>
      <div className="nav__right">
        <input
          value={Math.round(statevolum * 100)}
          onChange={(e) => handleVolume(e.target.value / 100)}
          type="range"
        />
        <VolumeUp className="smallIcons" />
      </div>
    </div>
  );
}

export default Nav;
