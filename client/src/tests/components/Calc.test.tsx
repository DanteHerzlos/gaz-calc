import React from "react"
import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/react"
import { renderWithRedux } from "@tests/helpers/renderWithRedux"
import Calc from "@components/Calc"

describe("testing Calc component", () => {
  it("should toggle forms", async () => {
    renderWithRedux(<Calc />)
    const pressBtn = screen.getByText(/давление/i)
    const consumBtn = screen.getByText(/расход/i)
    const tempBtn = screen.getByText(/температура/i)

    expect(screen.queryByTestId("consum-form")).not.toBeNull()
    expect(screen.queryByTestId("press-form")).toBeNull()
    expect(screen.queryByTestId("temp-form")).toBeNull()

    await userEvent.click(pressBtn)
    expect(screen.queryByTestId("consum-form")).toBeNull()
    expect(screen.queryByTestId("press-form")).not.toBeNull()
    expect(screen.queryByTestId("temp-form")).toBeNull()

    await userEvent.click(tempBtn)
    expect(screen.queryByTestId("consum-form")).toBeNull()
    expect(screen.queryByTestId("press-form")).toBeNull()
    expect(screen.queryByTestId("temp-form")).not.toBeNull()

    await userEvent.click(consumBtn)
    expect(screen.queryByTestId("consum-form")).not.toBeNull()
    expect(screen.queryByTestId("press-form")).toBeNull()
    expect(screen.queryByTestId("temp-form")).toBeNull()
  })
})
