import { AxiosResponse } from "axios"
import IConsumption from "types/IConsumption"
import { ConsumptionType } from "types/ConsumptionType"
import { $host } from "."

export default class ConsumptionService {
  static async getConsumptions(
    name: ConsumptionType,
    number: string
  ): Promise<AxiosResponse<IConsumption>> {
    return await $host.get("/consumption", {
      params: {
        name,
        number,
      },
    })
  }
}
