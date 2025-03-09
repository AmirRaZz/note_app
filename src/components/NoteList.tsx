import { Note } from "../types/Note";

type props = {
  notes: Note[];
  onDelete: (id: number) => void;
  onComplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function NoteList({ notes, onDelete, onComplete }: props) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({
  note,
  onDelete,
  onComplete,
}: {
  note: Note;
  onDelete: (id: number) => void;
  onComplete: (e:React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed":""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            name={String(note.id)}
            id={String(note.id)}
            value={note.id}
            checked={note.completed}
            onChange={onComplete}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
