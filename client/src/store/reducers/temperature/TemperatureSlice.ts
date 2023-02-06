import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import ITemperature from "types/ITemperature"

interface TemperatureState {
  error: string
  isLoading: boolean
  temperatures: ITemperature
}

const initialState: TemperatureState = {
  error: "",
  isLoading: false,
  temperatures: {} as ITemperature,
}

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    temperatureFetching(state) {
      state.isLoading = true
    },
    temperatureFetchingSuccess(state, action: PayloadAction<ITemperature>) {
      state.isLoading = false
      state.temperatures = action.payload
      state.error = ""
    },
    temperatureFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
    clearError(state) {
      state.error = ""
    },
  },
})

export default temperatureSlice.reducer