import React from "react";
import "./Main.css";
import Enterbutton from './Assets/Vector (5).png'

export default function Main({activeNote}) {

  return <div>
    {
      activeNote && <div className="Main">
      <div className="main-title">
        <div className="main-note-shortcut">
          <p>{activeNote.shortcut}</p>
        </div>
        <div className="main-note-title">
          <strong>{activeNote.title}</strong>
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
    }
  </div>
    
    
}
