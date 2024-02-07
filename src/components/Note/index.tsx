export const Note = () => {
  return (
    <button
      className="text-left rounded-md bg-slate-800 p-5 space-y-3 
    overflow-hidden relative hover:ring-2 hover:ring-lime-600 
    outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="text-slate-300 text-sm font-medium">Há 2 dias</span>
      <p className="text-slate-400 leading-6 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad,
        doloribus aliquid atque voluptates ea, tenetur perspiciatis, nihil
        quisquam autem possimus cupiditate quaerat? Non optio odio corporis
        totam minus voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nemo ad, doloribus aliquid atque voluptates ea, tenetur
        perspiciatis, nihil quisquam autem possimus cupiditate quaerat? Non
        optio odio corporis totam minus voluptas. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo ad, doloribus aliquid atque
        voluptates ea, tenetur perspiciatis, nihil quisquam autem possimus
        cupiditate quaerat? Non optio odio corporis totam minus voluptas.
      </p>
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
    </button>
  );
};
