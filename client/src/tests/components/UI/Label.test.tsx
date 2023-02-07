import React from "react"
import { render, screen } from "@testing-library/react"
import Label from "@components/UI/Label"

describe("Label component tests", () => {
  it("should find component", () => {
    render(<Label value="label" />)
    expect(screen.queryByText(/label/i)).not.toBeNull()
  })
})
