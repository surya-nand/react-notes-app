import React from 'react'
import './Sidebar.css'

export default function Sidebar({notes, addNewnote, activeNotes, setActiveNotes}) {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Pocket Notes</h1>
                <button onClick={addNewnote}><span className='add-button'>+</span>Create Notes Group</button>
            </div>
            <div className="sidebar-notes">
            {notes.map((note) => (
                                <div className={`sidebar-note ${note.id === activeNotes && "active"}`}
                                onClick={() => setActiveNotes(note.id)}>
                                <div className="sidebar-note-shortcut">
                                    <p>{note.shortcut}</p>
                                </div>
                                <div className="sidebar-note-title">
                                    <strong>{note.title}</strong>
                                </div>            
                            </div>
            ))}
            </div>
        </div> 
    </div>
  )
}
