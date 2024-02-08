import * as Dialog from "@radix-ui/react-dialog";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface NewNotesProps {
  onAddNote: (content: string) => void;
}

let recognition: SpeechRecognition | null;

export const NewNotes = ({ onAddNote }: NewNotesProps) => {
  const [shouldShowOnboarding, setShouldShowOnboarding] =
    useState<boolean>(true);
  const [content, setContent] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleShowEditor = () => {
    setShouldShowOnboarding(false);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (e.target.value === "") {
      setShouldShowOnboarding(true);
    }
  };

  const handleOnSave = (e: FormEvent) => {
    e.preventDefault();

    if (content === "") {
      return;
    }

    toast.success("Nota adicionada com sucesso!");
    onAddNote(content);
    setContent("");
    setShouldShowOnboarding(true);
  };

  const handleStartRecording = () => {
    const isSpeechRecognitionSupported =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionSupported) {
      alert("Seu navegador não suporta o reconhecimento de fala");
      return;
    }

    setIsRecording(true);
    setShouldShowOnboarding(false);

    const speechRecognitionApi =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new speechRecognitionApi();

    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcrition = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setContent(transcrition);
    };

    recognition.onerror = (event) => {
      console.error("Erro no reconhecimento de fala:", event.error);
    };

    recognition.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    console.log(recognition);

    if (recognition !== null) {
      recognition.stop();
    }
  };

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
          <form className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-slate-300 text-sm font-medium">
                Adicionar Nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-slate-400 leading-6 text-sm">
                  Comece{" "}
                  <button
                    className="text-lime-400 font-medium hover:underline"
                    onClick={handleStartRecording}
                    type="button"
                  >
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="text-lime-400 font-medium hover:underline"
                    onClick={handleShowEditor}
                    type="button"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="bg-transparent text-sm text-slate-400 leading-6
                outline-none resize-none flex-1"
                  onChange={handleContentChange}
                  value={content}
                ></textarea>
              )}
            </div>

            {!isRecording ? (
              <button
                type="button"
                onClick={handleOnSave}
                className="w-full bg-lime-400 text-lime-950 py-4 text-center text-sm 
            outline-none font-medium hover:bg-lime-500"
              >
                Salvar nota
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStopRecording}
                className="w-full bg-slate-900 text-slate-400 py-4 text-center text-sm 
            outline-none font-medium hover:text-slate-100 flex justify-center items-center gap-2"
              >
                <div className="size-3 bg-red-500 rounded-full animate-pulse" />
                Gravando! (clique p/ interromper)
              </button>
            )}
          </form>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
