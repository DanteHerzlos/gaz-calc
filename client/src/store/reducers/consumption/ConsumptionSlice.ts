import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IConsumption from "types/IConsumption"

interface ConsumptionState {
  error: string
  isLoading: boolean
  consumptions: IConsumption
}

const initialState: ConsumptionState = {
  error: "",
  isLoading: false,
  consumptions: {} as IConsumption,
}

export const consumptionSlice = createSlice({
  name: "consumption",
  initialState,
  reducers: {
    consumptionFetching(state) {
      state.isLoading = true
    },
    consumptionFetchingSuccess(state, action: PayloadAction<IConsumption>) {
      state.isLoading = false
      state.consumptions = action.payload
      state.error = ""
    },
    consumptionFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
    clearError(state) {
      state.error = ""
    }
  },
})


export default consumptionSlice.reducer