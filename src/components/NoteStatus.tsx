import { Note } from "../types/Note";
import Message from "./Message";

function NoteStatus({ notes }: { notes: Note[] }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        ℹ️ <span>No notes has already been added.</span> <span>✔️</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
