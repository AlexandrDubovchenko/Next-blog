import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "../pages/profile";
import { Provider } from "react-redux";
import { useRouter } from "../__mocks__/router"; 
import { mockStore } from "../__mocks__/store";

describe("Login", () => {
  it("renders a posts list", () => {
    render(
      <Provider store={mockStore}>
        <Profile />
      </Provider>
    );

    const logoutBtn = screen.getByTestId("logout_btn");

    expect(logoutBtn).toBeInTheDocument();
  });
});
