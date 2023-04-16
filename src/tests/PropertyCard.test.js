import React from "react";
 import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard component", () => {
    const validProps = {
        bathrooms: 2,
        bedrooms: 3,
        city: "new york",
        email: "1@1.com",
        title: "title",
        type: "apartment",
        price: 200000,
    };

    it("renders title correctly", () => {
        const { asFragment } = render(<PropertyCard property={validProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
