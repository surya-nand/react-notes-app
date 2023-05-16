import React from "react";
import "./Main.css";
import Enterbutton from './Assets/Vector (5).png'

export default function Main() {
  return (
    <div className="Main">
      <div className="main-title">
        <div className="main-note-shortcut">
          <p>xx</p>
        </div>
        <div className="main-note-title">
          <strong>TITLE</strong>
        </div>
      </div>
      <div className="main-text-area">
        <div className="main-text-area-modified">
        <div className="main-text-area-time">
        <small>[Time]</small>
        </div>
        <div className="main-text-area-date">
        <small>[Date]</small>
        </div>
        </div>
        <div className="main-notes">
        TEXT PREVIEW
        </div>
      </div>
      <div className="main-input-area">
        <textarea id="body" placeholder="Write your notes here...">
        </textarea>
        <button><img id="enterimg" src={Enterbutton} alt=''></img></button>
      </div>
    </div>
  );
}
