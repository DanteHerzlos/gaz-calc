import PressureService from "@services/PressureService"
import { AppDispatch } from "@store/store"
import { PressureType } from "types/PressureType"
import { pressureSlice } from "./PressureSlice"

export const calcPressures =
  (type: PressureType, number: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(pressureSlice.actions.pressureFetching())
      const response = await PressureService.getPressures(type, number)
      dispatch(pressureSlice.actions.pressureFetchingSuccess(response.data))
    } catch (e) {
      dispatch(
        pressureSlice.actions.pressureFetchingError((e as Error).message)
      )
    }
  }

export const pressureClearError = () => (dispatch: AppDispatch) => {
  dispatch(pressureSlice.actions.clearError())
}
