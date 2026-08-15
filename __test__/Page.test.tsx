import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe("Home integration tests", () => {
  test("adds a player to the list", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Player/Team name");
    const addButton = screen.getByRole("button", {
      name: "+ Add",
    });

    fireEvent.change(input, {
      target: { value: "Player 1" },
    });

    fireEvent.click(addButton);

    expect(screen.getByText("Player 1")).toBeInTheDocument();
  });

  test("deletes a player from the list", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Player/Team name");
    const addButton = screen.getByRole("button", {
      name: "+ Add",
    });

    fireEvent.change(input, {
      target: { value: "Player 1" },
    });

    fireEvent.click(addButton);

    expect(screen.getByText("Player 1")).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", {
      name: "Delete Player 1",
    });

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Player 1")).not.toBeInTheDocument();
  });

  test("shows the draw after clicking Create Draw", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Player/Team name");
    const addButton = screen.getByRole("button", {
      name: "+ Add",
    });

    fireEvent.change(input, {
      target: { value: "Player 1" },
    });

    fireEvent.click(addButton);

    const createDrawButton = screen.getByRole("button", {
      name: "Create Draw",
    });

    fireEvent.click(createDrawButton);

    expect(screen.getByText("Draw")).toBeInTheDocument();
  });
});
