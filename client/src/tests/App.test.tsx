import React from "react"
import { screen } from "@testing-library/react"
import App from "../App"
import { renderWithRedux } from "./helpers/renderWithRedux"

describe("App test", () => {
  it("should be rendered", () => {
    renderWithRedux(<App />)
    expect(screen.getByText(/расход/i)).toBeDefined()
  })
})
