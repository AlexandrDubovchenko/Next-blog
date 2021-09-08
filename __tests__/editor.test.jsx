import React from "react";
import { render, screen } from "@testing-library/react";
import { Editor } from "../components/Editor";

describe("Editor", () => {
  it("renders an editor", () => {
    render(<Editor />);

    const editor = screen.getByTestId("editor");

    expect(editor).toBeInTheDocument();
  });
});
