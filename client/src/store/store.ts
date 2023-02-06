import { combineReducers, configureStore } from "@reduxjs/toolkit"
import temperatureReducer from "./reducers/temperature/TemperatureSlice"
import pressureReducer from "./reducers/pressure/PressureSlice"
import consumptionReducer from "./reducers/consumption/ConsumptionSlice"

const rootReducer = combineReducers({
  temperatureReducer,
  pressureReducer,
  consumptionReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
