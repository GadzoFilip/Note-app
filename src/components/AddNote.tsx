import React, { useState } from "react";
import { AddNoteProps } from "../interfaces";


const AddNote: React.FC<AddNoteProps> = ({handleAddNote, id}:AddNoteProps) => {

  const DEFAULT_TEXT = `This is predetermined data/text (delete this): 
  * empty row above
  *italic*,
  **bold**,
  - bullet point,
  [] to do,
  [x] done,
  `

  const [noteText, setNoteText] = useState(DEFAULT_TEXT); 

  const CHAR_LIMIT = 200

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(CHAR_LIMIT - event.target.value.length >= 0) {
        setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
        handleAddNote(noteText, id)
        setNoteText(noteText)
    }
  }

  return (
    <div className="bg-blue-200 rounded-xl p-4 min-h-44 flex flex-col justify-between">
      <textarea  
        className="border-none resize-none bg-blue-200 focus:outline-none text-black"
        rows={8}
        cols={10}
        value={noteText}
        onChange={handleChange}
      />
       
      <div className="flex items-center justify-between">
        <small>{CHAR_LIMIT - noteText.length} Remaining</small>
        <button onClick={handleSaveClick} className="bg-gray-100 border-none rounded-xl px-2 py-1 hover:bg-gray-200">
          Save
        </button> 
      </div>
    </div>
  );
};

export default AddNote;
