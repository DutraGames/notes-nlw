import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
interface NoteProps {
  note: {
    date: Date;
    content: string;
  };
}

export const Note = ({ note }: NoteProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="text-left rounded-md bg-slate-800 p-5 flex flex-col gap-3 
    overflow-hidden relative hover:ring-2 hover:ring-lime-600
    outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        <span className="text-slate-300 text-sm font-medium">
          {formatDistanceToNow(note.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
        <p className="text-slate-400 leading-6 text-sm">{note.content}</p>
        <div
          className="pointer-events-none absolute bottom-0 right-0 left-0 h-1/2 
        bg-gradient-to-t from-black/60 to-black/0"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 inset-0 fixed" />
        <Dialog.DialogContent
          className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
          bg-slate-700 md:max-w-[640px] w-full md:rounded-md flex flex-col outline-none
          overflow-hidden h-[60vh]"
        >
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-5">
            <span className="size-5 houver:text-slate-100">X</span>
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-slate-300 text-sm font-medium">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-slate-400 leading-6 text-sm">{note.content}</p>
          </div>

          <button
            type="button"
            className="w-full bg-slate-800 text-slate-300 py-4 text-center text-sm 
            outline-none font-medium group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar esta nota
            </span>
            ?
          </button>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
