import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

import { useState } from "react";
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState([]);


  const addNewnote= () => {

    const title = window.prompt("Enter the title:");
    if(title){
    const newNote ={
      id: uuid(),
      title: title,
      shortcut: ""
    }

  const words = newNote.title.split(" ");
  if (words.length >= 2) {
    const firstLetter = words[0][0];
    const secondWord = words[1][0];
    newNote.shortcut = `${firstLetter.toUpperCase()}${secondWord.toUpperCase()}`;
  }

  else{
    const firstLetter = words[0][0];
    const secondWord = words[0][1];
    newNote.shortcut = `${firstLetter.toUpperCase()}${secondWord.toUpperCase()}`;
  }
    setNotes([newNote,...notes])
  }
}

  return (
    <div className="App">
      <Sidebar notes={notes} addNewnote={addNewnote} />
      <Main notes={notes} />
    </div>
  );
}

export default App;
