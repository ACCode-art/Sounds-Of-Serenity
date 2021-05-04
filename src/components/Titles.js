import React from 'react';
import './Titles.css';

function Titles() {
  return (
    <div className="titles">
      <div className="titles__left"></div>
      <div className="titles__right">
        <div className="titles__rightTitle">
          <p>Title</p>
        </div>
        <div className="titles__rightLength">
          <p>Length</p>
        </div>
        <div className="titles__rightRelease">
          <div className="titles__rightReleaseIcons"></div>
        </div>
      </div>
    </div>
  );
}

export default Titles;
