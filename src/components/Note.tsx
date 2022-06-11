import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { NoteProps } from "../interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Note: React.FC<NoteProps> = ({
  id,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
}: NoteProps) => {
  return (
    <div
      key={id}
      className="bg-yellow-200 rounded-xl p-4 min-h-44 flex flex-col justify-between whitespace-pre-wrap"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      {/* footer */}
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <div className="flex">
          <IoCreateSharp
            size="1.3rem"
            className="mr-2 hover:cursor-pointer"
            onClick={() => (handleEditNote ? handleEditNote(id) : null)}
          />
          <MdDeleteForever
            size="1.3rem"
            className="hover:cursor-pointer"
            onClick={() => (handleDeleteNote ? handleDeleteNote(id) : null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
