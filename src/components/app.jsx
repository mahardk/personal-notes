import React, { useState } from "react";
import { getInitialData } from "../utils/index.js";
import NoteForm from "./noteForm";
import NoteList from "./noteList";
import NoteSearch from "./noteSearch";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");

  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>NOTESQUE</h1>
        <NoteSearch keyword={searchKeyword} onSearch={setSearchKeyword} />
      </div>
      <div className="note-app__body">
        <NoteForm onAddNote={addNote} />
        <h2>Daftar Catatan</h2>
        <NoteList notes={filteredNotes} onDelete={deleteNote} />
      </div>
    </div>
  );
}

export default App;
