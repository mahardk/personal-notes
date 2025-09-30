import React, { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= maxTitleLength) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({ title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <p className="note-input__title__char-limit">
        Sisa karakter: {maxTitleLength - title.length}
      </p>
      <input
        type="text"
        className="note-input__title"
        placeholder="Judul catatan"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="note-input__body"
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default NoteForm;
