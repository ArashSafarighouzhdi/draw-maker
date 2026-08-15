export type Player = {
  id: string;
  name: string;
};

export type PlayerInputProps = {
  onAddPlayer: (name: string) => void;
};

export type PlayerListProps = {
  players: Player[];
  onEditPlayer: (id: string) => void;
  onDeletePlayer: (id: string) => void;
};

export type DrawMakerProps = {
  onCreateDraw: () => void;
  disabled?: boolean;
};
export type DrawProps = {
  players: Player[];
};

export type NewDrawProps = {
  onNewDraw: () => void;
};
