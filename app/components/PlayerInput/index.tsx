import { useState } from "react";
import { PlayerInputProps } from "../../types";

const PlayerInput = ({ onAddPlayer }: PlayerInputProps) => {
  const [name, setName] = useState("");

  const addPlayer = () => {
    if (name === "") return;

    onAddPlayer(name);
    setName("");
  };

  return (
    <div className="p-4 flex gap-2 bg-white">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player/Team name"
        className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01482e]"
      />

      <button
        onClick={addPlayer}
        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
      >
        + Add
      </button>
    </div>
  );
};

export default PlayerInput;
