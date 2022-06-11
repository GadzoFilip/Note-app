import React, {useState} from "react";
import { NoteListProps } from "../interfaces";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList: React.FC<NoteListProps> = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }: NoteListProps) => {

  const [selectedEdit, setSelectedEdit] = useState("")

  return (
    <div className="grid gap-4 grid-cols-note ">
      {notes.map((note) => (
        note.id == selectedEdit ?
        <AddNote handleAddNote={(text, id) => {handleEditNote(text, id); setSelectedEdit("")}} id={note.id} /> : 
        <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} handleEditNote={() => {setSelectedEdit(note.id)}}/>
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
