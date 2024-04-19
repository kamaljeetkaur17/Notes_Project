import React, { useState } from 'react';
import Note from './Note';
import './NoteList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const NoteList = ({ notes, onAddNote, onEditNote, onDeleteNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  // const [selectedColor, setSelectedColor]=useState('');
  const [colorPickerVisible, setcolorPickerVisible] = useState(false);

  const colors = ['#ff9eb5','#f6d465','#a1d9c5','#f4a157']

  const handleAddNote = (color) => {
    onAddNote(newNoteTitle,color);
    setNewNoteTitle('');
    setcolorPickerVisible(false);
  };

  // const handleTitleChange = (event) => {
  //   setNewNoteTitle(event.target.value);
  // };

  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  //   setcolorPickerVisible(false);
  //   handleAddNote();
  // };

  return (
    <div className="note-list">
      <div className="add-note-wrapper">
        <button className='add-note-button'onClick={() => {
          setcolorPickerVisible(!colorPickerVisible);
          }}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className='color-picker-box'>
        {colorPickerVisible && (
          <ul className='color-picker'>
            {
              colors.map((color) => (
                <li 
                  key={color}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => handleAddNote(color)}
                ></li>
              ))
            } 

          </ul>
        )}
        </div>
      </div>

      <div className="container">
        {notes.map((note) => (
          <div className="box" key={note.id} style={{background:note.color}}>
            <Note
              title={note.title}
              content={note.content}
              onEdit={(editedTitle, editedContent) => onEditNote(note.id, editedTitle, editedContent)}
              onDelete={() => onDeleteNote(note.id)}
              color={note.color}
            />
          </div>
        ))}
      </div>

      {/* <input className='title-input-box' type="text" value={newNoteTitle} onChange={handleTitleChange} placeholder="Enter note title..." /> */}
    </div>
  );
};

export default NoteList;
