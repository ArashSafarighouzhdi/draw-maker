import { render, screen } from "@testing-library/react";
import DrawMaker from "../app/components/DrawMaker";

describe("DrawMaker", () => {
  test("renders the Create Draw button", () => {
    render(<DrawMaker onCreateDraw={() => {}} />);

    const button = screen.getByRole("button", {
      name: "Create Draw",
    });

    expect(button).toBeInTheDocument();
  });

  test("disables the Create Draw button", () => {
    render(<DrawMaker onCreateDraw={() => {}} disabled />);

    const button = screen.getByRole("button", {
      name: "Create Draw",
    });

    expect(button).toBeDisabled();
  });
});
