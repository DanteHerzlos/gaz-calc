import React from "react"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"
import Input from "@components/UI/Input"

describe("Input component test", () => {
  it("should type text in input", async () => {
    render(<Input placeholder="some text" />)
    const input = screen.queryByPlaceholderText("some text") as HTMLInputElement
    expect(input).not.toBeNull()
    await userEvent.type(input, "abc")
    expect(input.value).toBe("abc")
  })
})
