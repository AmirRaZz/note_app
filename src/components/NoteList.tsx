import { Note } from "../types/Note";
import { SortByType } from "../types/SortBy";

type props = {
  notes: Note[];
  sortBy: SortByType
  onDelete: (id: number) => void;
  onComplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function NoteList({ notes,sortBy, onDelete, onComplete }: props) {

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
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
