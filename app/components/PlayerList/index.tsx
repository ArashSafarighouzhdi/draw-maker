import { Edit, Trash2 } from "lucide-react";
import { PlayerListProps } from "../../types";

const PlayerList = ({
  players,
  onEditPlayer,
  onDeletePlayer,
}: PlayerListProps) => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold mb-3">Players</h2>

      <ul>
        {players.map((player) => (
          <li
            key={player.id}
            className="p-2 border-b flex justify-between items-center"
          >
            <span>{player.name}</span>

            <div className="flex gap-2">
              <button
                onClick={() => onEditPlayer(player.id)}
                aria-label={`Edit ${player.name}`}
                className="p-2 hover:bg-slate-100 rounded"
              >
                <Edit size={18} />
              </button>

              <button
                onClick={() => onDeletePlayer(player.id)}
                aria-label={`Delete ${player.name}`}
                className="p-2 hover:bg-red-50 rounded"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
