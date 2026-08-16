import { DrawProps } from "../../types";

const Draw = ({ players }: DrawProps) => {
  let drawSize = 8;

  while (drawSize < players.length) {
    drawSize = drawSize * 2;
  }

  const matchCount = drawSize / 2;
  const byeCount = drawSize - players.length;

  const shuffledPlayers = [...players];



  for (let i = shuffledPlayers.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledPlayers[i], shuffledPlayers[randomIndex]] = [
      shuffledPlayers[randomIndex],
      shuffledPlayers[i],
    ];
  }

  const matches = Array.from({ length: matchCount }, () => ({
    player1: null as (typeof players)[number] | null,
    player2: null as (typeof players)[number] | null,
  }));



  
  const byeMatches = new Set<number>();

  while (byeMatches.size < byeCount && byeMatches.size < matchCount) {
    const randomIndex = Math.floor(Math.random() * matchCount);

    byeMatches.add(randomIndex);
  }

  let playerIndex = 0;

  matches.forEach((match, index) => {
    if (byeMatches.has(index)) {
      match.player1 = shuffledPlayers[playerIndex];
      playerIndex++;
    } else {
      match.player1 = shuffledPlayers[playerIndex];
      playerIndex++;

      if (playerIndex < shuffledPlayers.length) {
        match.player2 = shuffledPlayers[playerIndex];
        playerIndex++;
      }
    }
  });

  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold mb-6">Draw</h2>

      <h3 className="font-semibold mb-4">Round 1</h3>

      <div className="space-y-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded-lg overflow-hidden"
          >
            <div className="p-2 border-b border-slate-200">
              {match.player1?.name || "BYE"}
            </div>

            <div className="p-2">{match.player2?.name || "BYE"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Draw;
