import { render, screen } from "@testing-library/react";
import NewDraw from "../app/components/NewDraw";

describe("NewDraw", () => {
  test("renders the New Draw button", () => {
    render(<NewDraw onNewDraw={() => {}} />);

    const button = screen.getByRole("button", {
      name: "New Draw",
    });

    expect(button).toBeInTheDocument();
  });

  test("calls onNewDraw when clicked", () => {
    const handleNewDraw = jest.fn();

    render(<NewDraw onNewDraw={handleNewDraw} />);

    const button = screen.getByRole("button", {
      name: "New Draw",
    });

    button.click();

    expect(handleNewDraw).toHaveBeenCalled();
  });
});
