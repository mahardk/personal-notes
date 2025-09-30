import React from "react";

function NoteSearch({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteSearch;
