import ConsumptionService from "@services/ConsumptionService"
import { AppDispatch } from "@store/store"
import { ConsumptionType } from "types/ConsumptionType"
import { consumptionSlice } from "./ConsumptionSlice"

export const calcConsumptions =
  (type: ConsumptionType, number: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(consumptionSlice.actions.consumptionFetching())
      const response = await ConsumptionService.getConsumptions(type, number)
      dispatch(
        consumptionSlice.actions.consumptionFetchingSuccess(response.data)
      )
    } catch (e) {
      dispatch(
        consumptionSlice.actions.consumptionFetchingError((e as Error).message)
      )
    }
  }

export const consumptionClearError = () => (dispatch: AppDispatch) => {
  dispatch(consumptionSlice.actions.clearError())
}
