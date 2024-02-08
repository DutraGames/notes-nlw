import { useState, ChangeEvent } from "react";
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

  const onDeleteNote = (id: string) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(newNotes);
    localStorage.setItem("@notes-nlw", JSON.stringify(newNotes));
  };

  const handleSeach = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="max-w-6xl mx-auto my-12 space-y-4 px-5">
      <img src={Logo} alt="Logo NLW Expert" />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Pesquisar uma nota..."
          className="bg-transparent text-3xl font-semibold placeholder:text-slate-500 outline-none w-full -tracking-tight"
          onChange={handleSeach}
        />
      </form>

      <div className="h-px w-full bg-slate-500"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNotes onAddNote={onAddNote} />
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />
        ))}
      </div>
    </div>
  );
};
