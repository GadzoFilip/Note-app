import React from "react";

export interface NoteProps {
  id: string;
  text: string;
  date: string;
  handleDeleteNote?:(id: string) => void
  handleEditNote?:(id: string) => void
}

export interface NoteListProps {
  notes: NoteProps[];
  handleAddNote:(text: string) => void
  handleDeleteNote?:(id: string) => void
  handleEditNote:(text: string, id?: string) => void
}

// type EditNote = (id: string, text: string) => void


export interface AddNoteProps {
    id?: string
    handleAddNote:(text: string, id?:string) => void
}
