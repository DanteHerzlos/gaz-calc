import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import pressureConverter from '../utils/pressureConverter';
import { Pressure, PressureType } from './interfaces/pressure.interface';

@Injectable()
export class PressureService {
  private readonly pressures = {} as Pressure;
  private readonly precision = 5;

  calcPressure(name: PressureType, number: string): Pressure {
    const N = Number(number);
    if (Number.isNaN(N)) {
      throw new HttpException(
        'Значение для преобразования не является числом!',
        HttpStatus.FORBIDDEN,
      );
    }

    if (name === 'pascal') {
      this.pressures.pascal = number;

      this.pressures.bar = pressureConverter
        .pascalToBar(N, this.precision)
        .toString();

      this.pressures.atm = pressureConverter
        .pascalToAtm(N, this.precision)
        .toString();

      this.pressures.ata = pressureConverter
        .pascalToAta(N, this.precision)
        .toString();

      return this.pressures;
    }

    if (name === 'bar') {
      this.pressures.bar = number;

      this.pressures.pascal = pressureConverter
        .barToPascal(N, this.precision)
        .toString();

      this.pressures.atm = pressureConverter
        .barToAtm(N, this.precision)
        .toString();

      this.pressures.ata = pressureConverter
        .barToAta(N, this.precision)
        .toString();

      return this.pressures;
    }

    if (name === 'atm') {
      this.pressures.atm = number;

      this.pressures.pascal = pressureConverter
        .atmToPascal(N, this.precision)
        .toString();

      this.pressures.ata = pressureConverter
        .atmToAta(N, this.precision)
        .toString();

      this.pressures.bar = pressureConverter
        .atmToBar(N, this.precision)
        .toString();

      return this.pressures;
    }

    if (name === 'ata') {
      this.pressures.ata = number;

      this.pressures.pascal = pressureConverter
        .ataToPascal(N, this.precision)
        .toString();

      this.pressures.bar = pressureConverter
        .ataToBar(N, this.precision)
        .toString();

      this.pressures.atm = pressureConverter
        .ataToAtm(N, this.precision)
        .toString();

      return this.pressures;
    }

    throw new HttpException(
      'Неверный тип для преобразования',
      HttpStatus.FORBIDDEN,
    );
  }
}
