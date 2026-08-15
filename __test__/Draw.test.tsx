import { render, screen } from "@testing-library/react";
import Draw from "../app/components/Draw";

const players = [
  { id: "1", name: "Player 1" },
  { id: "2", name: "Player 2" },
  { id: "3", name: "Player 3" },
  { id: "4", name: "Player 4" },
  { id: "5", name: "Player 5" },
];

describe("Draw", () => {
  test("renders Draw", () => {
    render(<Draw players={players} />);

    expect(screen.getByText("Draw")).toBeInTheDocument();
  });

  test("renders Round 1", () => {
    render(<Draw players={players} />);

    expect(screen.getByText("Round 1")).toBeInTheDocument();
  });

  test("renders players", () => {
    render(<Draw players={players} />);

    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(screen.getByText("Player 2")).toBeInTheDocument();
  });

  test("shows BYE", () => {
    render(<Draw players={players} />);

    const byes = screen.getAllByText("BYE");

    expect(byes.length).toBeGreaterThan(0);
  });

  test("does not render a player name that was not provided", () => {
    render(<Draw players={players} />);

    expect(screen.queryByText("Player 10")).not.toBeInTheDocument();
  });
});
