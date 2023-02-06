import round from './round';

export default class temperatureConverter {
  static celsiusToKelvin(number: number, precision: number): number {
    return round(number + 273.15, precision);
  }

  static celsiusToFahrenheit(number: number, precision: number): number {
    return round(number * (9 / 5) + 32, precision);
  }

  static kelvinToCelsius(number: number, precision: number): number {
    return round(number - 273.15, precision);
  }

  static kelvinToFahrenheit(number: number, precision: number): number {
    const fahrenheit = (number - 273.15) * (9 / 5) + 32;
    return round(fahrenheit, precision);
  }

  static fahrenheitToCelsius(number: number, precision: number): number {
    return round((number - 32) * (5 / 9), precision);
  }

  static fahrenheitToKelvin(number: number, precision: number): number {
    const kelvin = (number - 32) * (5 / 9) + 273.15;
    return round(kelvin, precision);
  }
}
