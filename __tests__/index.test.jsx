import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { Provider } from "react-redux";
import { initializeStore } from "../store";
import { useRouter } from "../__mocks__/router";
import { mockStore } from "../__mocks__/store";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });
});
