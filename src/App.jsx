import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList';
import Note from './Components/Note';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  // to handle adding a new note
  const handleAddNote = (title,color) => {
    setNotes([...notes, { id: Date.now(), title, content: '' ,color}]);
    // ...notes -> spread operator to create a shallow copy of the notes array
    // it appends the new note to this copy array
    // date.now() -> returns current time stamp 
  };

  //  to handle editing a note
  const handleEditNote = (id, editedTitle, editedContent) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title: editedTitle, content: editedContent } : note)));
  };

  //  to handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    // <div className='main'>
    <div className='app'>
      <p className='app-name'>MY NOTES</p>
      <NoteList
        notes={notes}
        onAddNote={handleAddNote}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteNote}
      />

    </div>
    // </div>
  );
}

export default App;
