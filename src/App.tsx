import { useState } from "react";
import Logo from "./assets/Logo-NLW.svg";
import { NewNotes } from "./components/NewNotes";
import { Note } from "./components/Note";

interface NoteProps {
  id: string;
  date: Date;
  content: string;
}

export const App = () => {
  const [notes, setNotes] = useState<NoteProps[]>(() => {
    const storageNotes = localStorage.getItem("@notes-nlw");

    if (storageNotes) {
      return JSON.parse(storageNotes);
    }

    return [];
  });
  const [search, setSearch] = useState<string>("");

  const onAddNote = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const arrayNotes = [newNote, ...notes];

    setNotes([newNote, ...notes]);

    localStorage.setItem("@notes-nlw", JSON.stringify(arrayNotes));
  };

  return (
    <div className="max-w-6xl mx-auto my-12 space-y-4">
      <img src={Logo} alt="Logo NLW Expert" />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Pesquisar uma nota..."
          className="bg-transparent text-3xl font-semibold placeholder:text-slate-500 outline-none w-full -tracking-tight"
        />
      </form>

      <div className="h-px w-full bg-slate-500"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNotes onAddNote={onAddNote} />
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};
