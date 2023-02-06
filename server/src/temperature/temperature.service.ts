import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import temperatureConverter from '../utils/temperatureConverter';
import {
  Temperature,
  TemperatureType,
} from './interfaces/temperature.interface';

@Injectable()
export class TemperatureService {
  private readonly temperatures = {} as Temperature;
  private readonly precision = 2;

  calcTemperature(name: TemperatureType, number: string): Temperature {
    const N = Number(number);
    if (Number.isNaN(N)) {
      throw new HttpException(
        'Значение для преобразования не является числом!',
        HttpStatus.FORBIDDEN,
      );
    }
    if (name === 'celsius') {
      this.temperatures.celsius = number;

      this.temperatures.kelvin = temperatureConverter
        .celsiusToKelvin(N, this.precision)
        .toString();

      this.temperatures.fahrenheit = temperatureConverter
        .celsiusToFahrenheit(N, this.precision)
        .toString();

      return this.temperatures;
    }

    if (name === 'kelvin') {
      this.temperatures.kelvin = number;

      this.temperatures.celsius = temperatureConverter
        .kelvinToCelsius(N, this.precision)
        .toString();

      this.temperatures.fahrenheit = temperatureConverter
        .kelvinToFahrenheit(N, this.precision)
        .toString();

      return this.temperatures;
    }

    if (name === 'fahrenheit') {
      this.temperatures.fahrenheit = number;

      this.temperatures.celsius = temperatureConverter
        .fahrenheitToCelsius(N, this.precision)
        .toString();

      this.temperatures.kelvin = temperatureConverter
        .fahrenheitToKelvin(N, this.precision)
        .toString();

      return this.temperatures;
    }

    throw new HttpException(
      'Неверный тип для преобразования',
      HttpStatus.FORBIDDEN,
    );
  }
}
