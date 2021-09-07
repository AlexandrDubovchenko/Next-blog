import React from "react";
import { render, screen } from "@testing-library/react";
import MyPosts from "../pages/my-posts";
import { Provider } from "react-redux";
import { useRouter } from "../__mocks__/router"; 
import { mockStore } from "../__mocks__/store";

describe("Login", () => {
  it("renders a posts list", () => {
    render(
      <Provider store={mockStore}>
        <MyPosts />
      </Provider>
    );

    const postsList = screen.getByTestId("posts_list");

    expect(postsList).toBeInTheDocument();
  });
});
