import round from './round';

export default class pressureConverter {
  static pascalToBar(number: number, precision: number): number {
    return round(number / 100000, precision);
  }

  static pascalToAtm(number: number, precision: number): number {
    return round(number / 101300, precision);
  }

  static pascalToAta(number: number, precision: number): number {
    return round(number / 98066, precision);
  }

  static barToPascal(number: number, precision: number): number {
    return round(number * 100000, precision);
  }

  static barToAtm(number: number, precision: number): number {
    return round(number / 1.01325, precision);
  }

  static barToAta(number: number, precision: number): number {
    return round(number / 0.98066, precision);
  }

  static atmToPascal(number: number, precision: number): number {
    return round(number * 101325, precision);
  }

  static atmToBar(number: number, precision: number): number {
    return round(number * 1.01325, precision);
  }

  static atmToAta(number: number, precision: number): number {
    return round(number * 1.03323, precision);
  }

  static ataToPascal(number: number, precision: number): number {
    return round(number * 98066, precision);
  }

  static ataToBar(number: number, precision: number): number {
    return round(number * 0.98066, precision);
  }

  static ataToAtm(number: number, precision: number): number {
    return round(number * 0.96784, precision);
  }
}
