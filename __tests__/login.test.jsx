import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { Provider } from "react-redux";
import { initializeStore } from "../store";
import { useRouter } from "../__mocks__/router";
import { mockStore } from "../__mocks__/store";

describe("Login", () => {
  it("renders a login form", () => {
    render(
      <Provider store={mockStore}>
        <Login />
      </Provider>
    );

    const loginForm = screen.getByTestId("login_form");

    expect(loginForm).toBeInTheDocument();
  });
});
