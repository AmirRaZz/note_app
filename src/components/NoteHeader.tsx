import { Note } from "../types/Note";
import { SortByType } from "../types/SortBy";

function NoteHeader({
  notes,
  sortBy,
  onSort,
}: {
  notes: Note[];
  sortBy: SortByType;
  onSort: (value:SortByType) => void;
}) {
  return (
    <div className="note-header">
      <h2>My Notes ({notes.length})</h2>
      <select value={sortBy} onChange={e=>onSort(e.target.value as SortByType)}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
