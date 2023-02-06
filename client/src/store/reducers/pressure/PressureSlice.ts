import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IPressure from "types/IPressure"

interface PressureState {
  error: string
  isLoading: boolean
  pressures: IPressure
}

const initialState: PressureState = {
  error: "",
  isLoading: false,
  pressures: {} as IPressure,
}

export const pressureSlice = createSlice({
  name: "pressure",
  initialState,
  reducers: {
    pressureFetching(state) {
      state.isLoading = true
    },
    pressureFetchingSuccess(state, action: PayloadAction<IPressure>) {
      state.isLoading = false
      state.pressures = action.payload
      state.error = ""
    },
    pressureFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
    clearError(state) {
      state.error = ""
    },
  },
})


export default pressureSlice.reducer