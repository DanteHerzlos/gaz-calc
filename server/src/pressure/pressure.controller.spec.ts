import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PressureController } from './pressure.controller';
import { PressureService } from './pressure.service';

describe('PressureController', () => {
  let pressureController: PressureController;
  let pressureService: PressureService;

  beforeEach(() => {
    pressureService = new PressureService();
    pressureController = new PressureController(pressureService);
  });

  describe('calcPressure', () => {
    it('should return an object of zeros', () => {
      const result = { pascal: '0', atm: '0', ata: '0', bar: '0' };
      expect(pressureController.calcPressure('pascal', '0')).toEqual(result);
    });
    it('should throw exception for invalid number', () => {
      try {
        expect(pressureController.calcPressure('pascal', 'abc'));
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
