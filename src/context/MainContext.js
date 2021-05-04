import React, { createContext, useReducer, useState } from 'react';
import playerReducer from './playerReducer';

import displacement from '../music/Displacement.mp3';
import TIOC from '../music/The Ingredients of Consciousness.mp3';
import theLight from '../music/The Light.mp3';
import theStorm from '../music/The Storm.mp3';
import withTheTruth from '../music/With The Truth.mp3';
import ambienceOne from '../music/Ambience One.mp3';

export const MainContext = createContext();

export const MusicProvider = (props) => {
  const initialState = { currentSong: '', playing: false, src: '' };
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState([]);

  const setCurrent = (id, file) =>
    dispatch({ type: 'set-current-song', data: { id, file } });

  const togglePlaying = () =>
    dispatch({ type: 'toggle-playing', data: state.playing ? false : true });

  const songs = [
    {
      title: 'Ambience One',
      length: '11:06',
      release: '27/4/21',
      background:
        'https://images.pexels.com/photos/7373776/pexels-photo-7373776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      src: ambienceOne,
    },
    {
      title: 'With The Truth',
      length: '4:35',
      release: '27/4/21',
      background:
        'https://images.pexels.com/photos/1579245/pexels-photo-1579245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      src: withTheTruth,
    },
    {
      title: 'Displacement',
      length: '4:35',
      release: '27/4/21',
      background:
        'https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      src: displacement,
    },
    {
      title: 'The Ingredients of Consciousness',
      length: '2:52',
      release: '19/11/91',
      background:
        'https://images.pexels.com/photos/4597252/pexels-photo-4597252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      src: TIOC,
    },
    {
      title: 'The Light',
      length: '4:58',
      release: '5/01/64',
      background:
        'https://images.pexels.com/photos/831899/pexels-photo-831899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      src: theLight,
    },
    {
      title: 'The Storm',
      length: '4:58',
      release: '5/01/64',
      background:
        'https://images.pexels.com/photos/772831/pexels-photo-772831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      src: theStorm,
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
        liked,
        setLiked,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
