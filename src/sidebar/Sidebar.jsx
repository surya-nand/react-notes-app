import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Pocket Notes</h1>
                <button><span className='add-button'>+</span>Create Notes Group</button>
            </div>
            <div className="sidebar-notes">
                <div className="sidebar-note">
                    <div className="sidebar-note-shortcut">
                        <p>xx</p>
                    </div>
                    <div className="sidebar-note-title">
                        <strong>TITLE</strong>
                    </div>            
                </div>
            </div>
        </div> 
    </div>
  )
}
