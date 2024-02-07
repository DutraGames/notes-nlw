import Logo from "./assets/Logo-NLW.svg";
import { NewNotes } from "./components/NewNotes";
import { Note } from "./components/Note";

export const App = () => {
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
        <NewNotes />
        <Note />
      </div>
    </div>
  );
};
