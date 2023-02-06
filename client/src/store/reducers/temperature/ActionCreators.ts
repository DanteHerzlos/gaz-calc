import TemperatureService from "@services/TemperatureService"
import { AppDispatch } from "@store/store"
import { TemperatureType } from "types/TemperatureType"
import { temperatureSlice } from "./TemperatureSlice"

export const calcTemperatures =
  (type: TemperatureType, number: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(temperatureSlice.actions.temperatureFetching())
      const response = await TemperatureService.getTemperatures(type, number)
      dispatch(
        temperatureSlice.actions.temperatureFetchingSuccess(response.data)
      )
    } catch (e) {
      dispatch(
        temperatureSlice.actions.temperatureFetchingError((e as Error).message)
      )
    }
  }

export const temperatureClearError = () => (dispatch: AppDispatch) => {
  dispatch(temperatureSlice.actions.clearError())
}
