import { DrawMakerProps } from "../../types";

const DrawMaker = ({ onCreateDraw, disabled = false }: DrawMakerProps) => {
  return (
    <div className="p-4 bg-white">
      <button
        onClick={onCreateDraw}
        disabled={disabled}
        className="w-full px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Draw
      </button>
    </div>
  );
};

export default DrawMaker;
