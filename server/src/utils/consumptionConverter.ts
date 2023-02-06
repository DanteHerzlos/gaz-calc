import round from './round';

export default class consumptionConverter {
  static secToHour(number: number, precision: number): number {
    return round(number * 3.6, precision);
  }

  static secToDay(number: number, precision: number): number {
    return round(number * 0.0864, precision);
  }

  static secToYear(number: number, precision: number): number {
    return round(number * 0.031536, precision);
  }

  static hourToSec(number: number, precision: number): number {
    return round(number / 3.6, precision);
  }

  static hourToDay(number: number, precision: number): number {
    return round(number * 0.024, precision);
  }

  static hourToYear(number: number, precision: number): number {
    return round(number * 0.00876, precision);
  }

  static dayToSec(number: number, precision: number): number {
    return round(number / 0.0864, precision);
  }

  static dayToHour(number: number, precision: number): number {
    return round(number / 0.024, precision);
  }
  static dayToYear(number: number, precision: number): number {
    return round(number * 0.365, precision);
  }

  static yearToSec(number: number, precision: number): number {
    return round(number / 0.031536, precision);
  }

  static yearToHour(number: number, precision: number): number {
    return round(number / 0.00876, precision);
  }

  static yearToDay(number: number, precision: number): number {
    return round(number / 0.365, precision);
  }
}
