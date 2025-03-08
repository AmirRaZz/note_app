import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { Note } from "./types/Note";

function App() {

  const [notes, setNotes] = useState<Note[] >([]);
  const handleAddNote=(newNote:Note)=>{
    setNotes(prevNotes=>[...prevNotes,newNote])
  }
  return (
    <>
      <div className="container">
        <div className="note-header">note header</div>
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
