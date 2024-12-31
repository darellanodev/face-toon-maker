import { render, screen } from "@testing-library/react";
import RotatorButton from "./RotatorButton";

describe("RotatorButton", () => {
  it("it renders a <button>", () => {
    render(<RotatorButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it('passes the text "my button text" to the button', () => {
    const text = "my button text";
    render(<RotatorButton text={text} />);
    expect(screen.getByRole("button")).toHaveTextContent("my button text");
  });
});
