import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm";
import { Provider } from "react-redux";
import { mockStore } from "../__mocks__/store";

describe("LoginForm", () => {
  it("renders an Login form", () => {
    render(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );

    const form = screen.getByTestId("login_form");

    expect(form).toBeInTheDocument();
  });

  it("shows loader", async () => {
    render(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    const button = screen.getByText("Login");
    fireEvent.submit(button);
    await waitFor(() => expect(screen.getByText("Loading...")).toBeInTheDocument());
  });
});
