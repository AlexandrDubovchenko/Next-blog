import React from "react";
import { render, screen } from "@testing-library/react";
import { PostsList } from "../components/PostsList";

describe("PostsList", () => {
  it("renders a list of posts", () => {
    render(<PostsList posts={[{ title: "TEST", text: "<p>TEST</>" }]} />);

    const listItem = screen.getByTestId("list-item");

    expect(listItem).toBeInTheDocument();
  });
});
