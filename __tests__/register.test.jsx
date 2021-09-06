import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../pages/register";
import { Provider } from "react-redux";
import { useRouter } from "../__mocks__/router";
import { mockStore } from "../__mocks__/store";

describe("Register", () => {
  it("renders a login form", () => {
    render(
      <Provider store={mockStore}>
        <Register />
      </Provider>
    );

    const registerForm = screen.getByTestId("register_form");

    expect(registerForm).toBeInTheDocument();
  });
});
