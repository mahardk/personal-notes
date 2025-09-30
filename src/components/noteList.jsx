import React from "react";
import NoteItem from "./noteItem";
import EmptyMessage from "./emptyMessage";

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
