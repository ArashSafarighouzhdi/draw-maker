"use client";

import { useState } from "react";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import PlayerList from "./components/PlayerList";
import DrawMaker from "./components/DrawMaker";
import Draw from "./components/Draw";
import NewDraw from "./components/NewDraw";
import { Player } from "./types";
import Footer from "./components/Footer";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [showBracket, setShowBracket] = useState(false);
  const [bracketPlayers, setBracketPlayers] = useState<Player[]>([]);

  const handleAddPlayer = (playerName: string) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name: playerName,
    };

    setPlayers((prev) => [...prev, newPlayer]);
  };

  const handleDeletePlayer = (id: string) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const handleEditPlayer = (id: string) => {
    const player = players.find((player) => player.id === id);

    if (!player) return;

    const newName = prompt("Enter new player name", player.name);

    if (newName) {
      setPlayers((prev) =>
        prev.map((player) =>
          player.id === id ? { ...player, name: newName } : player,
        ),
      );
    }
  };

  const handleGenerateBracket = () => {
    setBracketPlayers(players);
    setShowBracket(true);
  };

  const handleNewDraw = () => {
    setPlayers([]);
    setBracketPlayers([]);
    setShowBracket(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex justify-center p-4">
      <div className="w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden text-slate-800">
        <Header />

        <PlayerInput onAddPlayer={handleAddPlayer} />

        <PlayerList
          players={players}
          onEditPlayer={handleEditPlayer}
          onDeletePlayer={handleDeletePlayer}
        />

        {!showBracket && (
          <DrawMaker
            onCreateDraw={handleGenerateBracket}
            disabled={players.length === 0}
          />
        )}

        {showBracket && (
          <>
            <Draw players={bracketPlayers} />

            <div className="p-4 bg-white">
              <NewDraw onNewDraw={handleNewDraw} />
            </div>
          </>
        )}
        <Footer />
      </div>
    </main>
  );
}
