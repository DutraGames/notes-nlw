import * as Dialog from "@radix-ui/react-dialog";

export const NewNotes = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="rounded-md bg-slate-700 p-5
      text-left flex flex-col gap-3 hover:ring-2 hover:ring-lime-600
      outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        <span className="text-slate-200 text-sm font-medium">
          Adicionar Nota
        </span>
        <p className="text-slate-400 leading-6 text-sm">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 inset-0 fixed" />
        <Dialog.DialogContent
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-slate-700 max-w-[640px] w-full rounded-md flex flex-col outline-none
          overflow-hidden h-[60vh]"
        >
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-5">
            <span className="size-5 houver:text-slate-100">X</span>
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-slate-300 text-sm font-medium">
              Adicionar Nota
            </span>
            <p className="text-slate-400 leading-6 text-sm">
              Comece{" "}
              <button className="text-lime-400 font-medium hover:underline">
                gravando uma nota
              </button>{" "}
              em áudio ou se preferir
              <button className="text-lime-400 font-medium hover:underline">
                utilize apenas texto
              </button>
              .
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 text-lime-950 py-4 text-center text-sm 
            outline-none font-medium hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
