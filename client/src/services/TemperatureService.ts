import { AxiosResponse } from "axios"
import ITemperature from "types/ITemperature"
import { TemperatureType } from "types/TemperatureType"
import { $host } from "."

export default class TemperatureService {
  static async getTemperatures(
    name: TemperatureType,
    number: string
  ): Promise<AxiosResponse<ITemperature>> {
    return await $host.get("/temperature", {
      params: {
        name,
        number,
      },
    })
  }
}