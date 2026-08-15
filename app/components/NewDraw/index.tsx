import { NewDrawProps } from "../../types";

const NewDraw = ({ onNewDraw }: NewDrawProps) => {
  return (
    <button
      onClick={onNewDraw}
      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg"
    >
      New Draw
    </button>
  );
};

export default NewDraw;
