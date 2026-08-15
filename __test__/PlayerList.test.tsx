import { render, screen } from "@testing-library/react";
import PlayerList from "../app/components/PlayerList";

describe("PlayerList", () => {
  test("renders the Players heading", () => {
    const players = [{ id: "1", name: "Player 1" }];

    render(
      <PlayerList
        players={players}
        onEditPlayer={() => {}}
        onDeletePlayer={() => {}}
      />,
    );

    const heading = screen.getByRole("heading", {
      name: "Players",
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders Player 1", () => {
    const players = [{ id: "1", name: "Player 1" }];

    render(
      <PlayerList
        players={players}
        onEditPlayer={() => {}}
        onDeletePlayer={() => {}}
      />,
    );

    const player = screen.getByText("Player 1");

    expect(player).toBeInTheDocument();
  });

  test("renders all players", () => {
    const players = [
      { id: "1", name: "Player 1" },
      { id: "2", name: "Player 2" },
      { id: "3", name: "Player 3" },
    ];

    render(
      <PlayerList
        players={players}
        onEditPlayer={() => {}}
        onDeletePlayer={() => {}}
      />,
    );

    const playersList = screen.getAllByRole("listitem");

    expect(playersList).toHaveLength(3);
  });

  test("renders Edit and Delete buttons", () => {
    const players = [{ id: "1", name: "Player 1" }];

    render(
      <PlayerList
        players={players}
        onEditPlayer={() => {}}
        onDeletePlayer={() => {}}
      />,
    );

    const editButton = screen.getByRole("button", {
      name: "Edit Player 1",
    });

    const deleteButton = screen.getByRole("button", {
      name: "Delete Player 1",
    });

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
