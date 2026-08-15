import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PlayerInput from "../app/components/PlayerInput";

describe("PlayerInput", () => {
  test("renders input", () => {
    render(<PlayerInput onAddPlayer={() => {}} />);

    const input = screen.getByPlaceholderText("Player/Team name");

    expect(input).toBeInTheDocument();
  });

  test("renders Add button", () => {
    render(<PlayerInput onAddPlayer={() => {}} />);

    const button = screen.getByRole("button", { name: "+ Add" });

    expect(button).toBeInTheDocument();
  });

  test("allows user to enter a player name", () => {
    render(<PlayerInput onAddPlayer={() => {}} />);

    const input = screen.getByPlaceholderText("Player/Team name");

    fireEvent.change(input, {
      target: { value: "Player 1" },
    });

    expect(input).toHaveValue("Player 1");
  });

  test("clears input after clicking Add", () => {
    render(<PlayerInput onAddPlayer={() => {}} />);

    const input = screen.getByPlaceholderText("Player/Team name");
    const button = screen.getByRole("button", { name: "+ Add" });

    fireEvent.change(input, {
      target: { value: "Player 1" },
    });

    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
