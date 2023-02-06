import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConsumptionController } from './consumption.controller';
import { ConsumptionService } from './consumption.service';

describe('ConsumptionController', () => {
  let consumptionController: ConsumptionController;
  let consumptionService: ConsumptionService;

  beforeEach(() => {
    consumptionService = new ConsumptionService();
    consumptionController = new ConsumptionController(consumptionService);
  });

  describe('calcConsumption', () => {
    it('should return an object of zeros', () => {
      const result = { perSec: '0', perHour: '0', perDay: '0', perYear: '0' };

      expect(consumptionController.calcConsumption('perSec', '0')).toEqual(
        result,
      );
    });
    it('should return correct values for perSec', () => {
      const result = {
        perSec: '1000',
        perHour: '3600',
        perDay: '86.4',
        perYear: '31.536',
      };

      expect(consumptionController.calcConsumption('perSec', '1000')).toEqual(
        result,
      );
    });

    it('should return correct values for perHour', () => {
      const result = {
        perSec: '1000',
        perHour: '3600',
        perDay: '86.4',
        perYear: '31.536',
      };

      expect(consumptionController.calcConsumption('perHour', '3600')).toEqual(
        result,
      );
    });

    it('should return correct values for perDay', () => {
      const result = {
        perSec: '1000',
        perHour: '3600',
        perDay: '86.4',
        perYear: '31.536',
      };

      expect(consumptionController.calcConsumption('perDay', '86.4')).toEqual(
        result,
      );
    });

    it('should return correct values for perYear', () => {
      const result = {
        perSec: '1000',
        perHour: '3600',
        perDay: '86.4',
        perYear: '31.536',
      };

      expect(
        consumptionController.calcConsumption('perYear', '31.536'),
      ).toEqual(result);
    });

    it('should throw exception for invalid number', () => {
      try {
        expect(consumptionController.calcConsumption('perYear', 'abc'));
      } catch (error) {
        expect(error).toEqual(
          new HttpException(
            'Значение для преобразования не является числом!',
            HttpStatus.FORBIDDEN,
          ),
        );
      }
    });
  });
});
