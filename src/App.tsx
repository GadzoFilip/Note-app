import React, { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import { NoteProps } from "./interfaces";
import NotesList from "./components/NotesList";

const App = () => {
  
  const loadedTodos = localStorage.getItem('react-note-app-data')
    ? JSON.parse(localStorage.getItem('react-note-app-data') || "{}") :[]

  const [notes, setNotes] = useState<NoteProps[]>(loadedTodos);

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const editNote = (text: string, id?: string) => {
    const newNotes = [...notes]
    const index = newNotes.findIndex(e => e.id == id)
    newNotes[index].text = text
    setNotes(newNotes)  
  }

  return (
    <div className="max-w-screen-xl mr-auto ml-auto mt-4 pr-4 pl-4">
      <h1 className="mb-8 text-7xl font-bold">Note App</h1>
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} handleEditNote={editNote}/>
    </div>
  );
};

export default App;
