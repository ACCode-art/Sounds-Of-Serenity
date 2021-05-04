import React, { useContext } from 'react';
import './Track.css';
import { MainContext } from '../context/MainContext';
import { FavoriteBorder } from '@material-ui/icons';

function Track({ title, release, background, length, src }) {
  const { togglePlaying, setCurrent, liked, setLiked } = useContext(
    MainContext
  );

  function pushHandler() {
    setLiked([...liked, { title: title, img: background, src: src }]);
  }

  return (
    <div className="track" onClick={() => setCurrent(title, src)}>
      <div className="track__left">
        <img src={background} alt="" />
      </div>
      <div className="track__right">
        <div className="track__rightTitle">
          <p>{title}</p>
        </div>
        <div className="track__rightLength">
          <p>{length}</p>
        </div>
        <div className="track__rightRelease">
          <div className="track__rightReleaseIcons" onClick={pushHandler}>
            <FavoriteBorder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
