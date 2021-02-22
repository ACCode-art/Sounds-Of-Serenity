import React, { createContext, useReducer, useState } from "react";
import playerReducer from "./playerReducer";

export const MainContext = createContext();

export const MusicProvider = (props) => {
  const initialState = { currentSong: "", playing: false, src: "" };
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  console.log(`is this showing? ${show}`);

  const setCurrent = (id, file) =>
    dispatch({ type: "set-current-song", data: { id, file } });

  const togglePlaying = () =>
    dispatch({ type: "toggle-playing", data: state.playing ? false : true });

  console.log(state);
  const songs = [
    {
      title: "HomeRoad",
      length: "3:52",
      release: "31/10/31",
      background:
        "https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      src:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_09_-_Homeroad.mp3",
    },
    {
      title: "Interception",
      length: "2:52",
      release: "19/11/91",
      background:
        "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      src:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Interception.mp3",
    },
    {
      title: "Sentinel",
      length: "4:58",
      release: "5/01/64",
      background:
        "https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      src:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3",
    },
    {
      title: "Augmentation",
      length: "4:58",
      release: "5/01/64",
      background:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      src:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_01_-_Augmentations.mp3",
    },
  ];

  return (
    <MainContext.Provider
      value={{
        songs,
        currentSong: state.currentSong,
        src: state.src,
        playing: state.playing,
        togglePlaying,
        setCurrent,
        searchTerm,
        setSearchTerm,
        setShow,
        show,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
