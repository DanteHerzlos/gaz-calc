import { setupStore } from "@store/store"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"

export const renderWithRedux = (component: JSX.Element) => {
  const store = setupStore()

  return render(<Provider store={store}>{component}</Provider>)
}
