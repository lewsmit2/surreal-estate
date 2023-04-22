import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

describe("Sidebar component", () => {
    it("renders Sidebar component without crashing", () => {
        render(<Sidebar />);
        expect(screen.getByText("Cities")).toBeInTheDocument();
    });

    // it("renders Sidebar with correct number of links", () => {
    //     render(<Sidebar />);
    //     expect(screen.getAllByRole("link")).toHaveLength(4);
    // });

    // it("renders Sidebar with correct links and hrefs", () => {
    //     render(<Sidebar />);
    //     const links = screen.getAllByRole("link");
    //     expect(links[0]).toHaveAttribute("href", "/?query={'city': 'Manchester'}");
    //     expect(links[1]).toHaveAttribute("href", "/?query={'city': 'Leeds'}");
    //     expect(links[2]).toHaveAttribute("href", "/?query={'city': 'Sheffield'}");
    //     expect(links[3]).toHaveAttribute("href", "/?query={'city': 'Liverpool'}");
    // });

    // it("renders Sidebar with correct CSS class", () => {
    //     render(<Sidebar />);
    //     expect(screen.getByTestId("sidebar")).toHaveClass("sidebar");
    // })
})