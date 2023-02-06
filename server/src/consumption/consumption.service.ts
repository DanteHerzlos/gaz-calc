import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import consumptionConverter from '../utils/consumptionConverter';
import {
  Consumption,
  ConsumtionType,
} from './interfaces/consumption.interface';

@Injectable()
export class ConsumptionService {
  private readonly consumptions = {} as Consumption;
  private readonly precision = 4;

  calcConsumption(name: ConsumtionType, number: string): Consumption {
    const N = Number(number);
    if (Number.isNaN(N)) {
      throw new HttpException(
        'Значение для преобразования не является числом!',
        HttpStatus.FORBIDDEN,
      );
    }

    if (name === 'perSec') {
      this.consumptions.perSec = number;

      this.consumptions.perHour = consumptionConverter
        .secToHour(N, this.precision)
        .toString();

      this.consumptions.perDay = consumptionConverter
        .secToDay(N, this.precision)
        .toString();

      this.consumptions.perYear = consumptionConverter
        .secToYear(N, this.precision)
        .toString();

      return this.consumptions;
    }

    if (name === 'perHour') {
      this.consumptions.perHour = number;

      this.consumptions.perSec = consumptionConverter
        .hourToSec(N, this.precision)
        .toString();

      this.consumptions.perDay = consumptionConverter
        .hourToDay(N, this.precision)
        .toString();

      this.consumptions.perYear = consumptionConverter
        .hourToYear(N, this.precision)
        .toString();

      return this.consumptions;
    }

    if (name === 'perDay') {
      this.consumptions.perDay = number;

      this.consumptions.perSec = consumptionConverter
        .dayToSec(N, this.precision)
        .toString();

      this.consumptions.perHour = consumptionConverter
        .dayToHour(N, this.precision)
        .toString();

      this.consumptions.perYear = consumptionConverter
        .dayToYear(N, this.precision)
        .toString();

      return this.consumptions;
    }

    if (name === 'perYear') {
      this.consumptions.perYear = number;

      this.consumptions.perSec = consumptionConverter
        .yearToSec(N, this.precision)
        .toString();

      this.consumptions.perHour = consumptionConverter
        .yearToHour(N, this.precision)
        .toString();

      this.consumptions.perDay = consumptionConverter
        .yearToDay(N, this.precision)
        .toString();

      return this.consumptions;
    }
    
    throw new HttpException(
      'Неверный тип для преобразования!',
      HttpStatus.FORBIDDEN,
    );
  }
}
