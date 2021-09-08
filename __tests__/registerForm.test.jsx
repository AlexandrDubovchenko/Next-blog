import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from "../components/RegisterForm";
import { Provider } from "react-redux";
import { mockStore } from "../__mocks__/store";

describe("RegisterForm", () => {
  it("renders an register form", () => {
    render(
      <Provider store={mockStore}>
        <RegisterForm />
      </Provider>
    );

    const form = screen.getByTestId("register_form");

    expect(form).toBeInTheDocument();
  });

  it("shows loader", async () => {
    render(
      <Provider store={mockStore}>
        <RegisterForm />
      </Provider>
    );
    const button = screen.getByText("Create Account");
    fireEvent.submit(button);
    await waitFor(() => expect(screen.getByText("Loading...")).toBeInTheDocument());
  });
});
