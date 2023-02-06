import { AxiosResponse } from "axios"
import IPressure from "types/IPressure"
import { PressureType } from "types/PressureType"
import { $host } from "."

export default class PressureService {
  static async getPressures(
    name: PressureType,
    number: string
  ): Promise<AxiosResponse<IPressure>> {
    return await $host.get("/pressure", {
      params: {
        name,
        number,
      },
    })
  }
}
