import React from "react";
import { render, screen } from "@testing-library/react";
import Create from "../pages/create";
import { Provider } from "react-redux";
import { useRouter } from "../__mocks__/router";
import { mockStore } from "../__mocks__/store";

describe("Login", () => {
  it("renders a login form", () => {
    render(
      <Provider store={mockStore}>
        <Create />
      </Provider>
    );

    const createForm = screen.getByTestId("create_form");

    expect(createForm).toBeInTheDocument();
  });
});
