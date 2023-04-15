import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

it("displays an error message", () => {

    render(<Alert message="Error!" />);

    expect(screen.getByText(/Error/).textContent).toBe("Error!");
});

it("displays a success message", () => {

    render(<Alert message="Success!" success />);

    expect(screen.getByText(/Success/).textContent).toBe("Success!");
});

it("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    const alert = asFragment();
    expect(alert).toMatchSnapshot();
});

it("renders a error message if message and isSuccess are falsy", () => {
    const { asFragment } = render(<Alert message="Error!" success={false} />);

    expect(screen.getByText("Error!")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
});

it("renders a success message if message and isSuccess are truthy", () => {
    const { asFragment } = render(<Alert message="Success!" success={true}/>);

    expect(screen.getByText("Success!")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
});