import React from "react"
import { render } from "@testing-library/react"
import App from "../App"

describe("Tests for App", () => {
    test("Should have app title", () => {
        const { getByText } = render(<App />)
        expect(getByText(/westley's react template/i)).toBeInTheDocument()
    })
})
