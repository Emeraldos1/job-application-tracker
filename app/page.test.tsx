import { render, screen } from "@testing-library/react";

import Home from "./page";

jest.mock("./components/MainAppBar", () => ({
  __esModule: true,
  default: () => <div data-testid="main-app-bar" />,
}));

describe("Home page", () => {
  it("renders the welcome heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /welcome to the job application tracker/i })
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    expect(
      screen.getByText(/track your job applications/i)
    ).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("renders the sign up link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
  });

  it("renders the please login heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /please login/i })
    ).toBeInTheDocument();
  });
});
