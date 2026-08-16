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
});
