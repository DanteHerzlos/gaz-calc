import TemperatureForm from "@components/forms/TemperatureForm"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithRedux } from "@tests/helpers/renderWithRedux"
import React from "react"

describe("Temperature Form tests", () => {
  it("should throw validation message", async () => {
    renderWithRedux(<TemperatureForm />)
    const input = screen.getByTestId("first-input") as HTMLInputElement
    expect(input).not.toBeNull()
    await userEvent.type(input, "abc")
    expect(input.validationMessage).toBe("Только числовой формат!")
  })
  it("should be coorect with positive numbers", async () => {
    renderWithRedux(<TemperatureForm />)
    const input = screen.getByTestId("first-input") as HTMLInputElement
    expect(input).not.toBeNull()
    await userEvent.type(input, "123")
    expect(input.validity.valid).toBe(true)
  })

  it("should be coorect with negative numbers", async () => {
    renderWithRedux(<TemperatureForm />)
    const input = screen.getByTestId("first-input") as HTMLInputElement
    expect(input).not.toBeNull()
    await userEvent.type(input, "-123")
    expect(input.validity.valid).toBe(true)
  })

  it("should be coorect with negative numbers with dot", async () => {
    renderWithRedux(<TemperatureForm />)
    const input = screen.getByTestId("first-input") as HTMLInputElement
    expect(input).not.toBeNull()
    await userEvent.type(input, "-123.24")
    expect(input.validity.valid).toBe(true)
  })
})
