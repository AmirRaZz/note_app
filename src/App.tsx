import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { Note } from "./types/Note";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { SortByType } from "./types/SortBy";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [sortBy, setSortBy] = useState<SortByType>("latest");

  const handleAddNote = (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id: number) => {
    // const filteredNotes=notes.filter(note=>note.id !== id);
    // setNotes(filteredNotes)
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleCompleteNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  

  return (
    <>
      <div className="container">
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(value) => setSortBy(value)}
        />
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteStatus notes={notes} />
            <NoteList
              notes={notes}
              sortBy={sortBy}
              onDelete={handleDeleteNote}
              onComplete={handleCompleteNote}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
