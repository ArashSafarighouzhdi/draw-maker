import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer", () => {
  test("renders the footer text", () => {
    render(<Footer />);

    expect(screen.getByText("©Arash2026 - Draw Maker")).toBeInTheDocument();
  });

  test("renders the Trophy icon", () => {
    render(<Footer />);

    expect(screen.getByTestId("trophy-icon")).toBeInTheDocument();
  });
});
