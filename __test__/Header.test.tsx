import { render, screen } from "@testing-library/react";
import Header from "../app/components/Header";

describe("Header", () => {
  test("renders the main title", () => {
    render(<Header />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: "Draw Maker",
    });

    expect(title).toBeInTheDocument();
  });

  test("renders the title text", () => {
    render(<Header />);

    const title = screen.getByText("Draw Maker");

    expect(title).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    render(<Header />);

    const subtitle = screen.getByRole("heading", {
      level: 2,
    });

    expect(subtitle).toHaveTextContent("Draw maker for players/teams");
  });

  test("renders the header", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });
});
