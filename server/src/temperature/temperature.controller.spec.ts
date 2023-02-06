import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';

describe('TemperatureController', () => {
  let temperatureService: TemperatureService;
  let temperatureController: TemperatureController;

  beforeEach(() => {
    temperatureService = new TemperatureService();
    temperatureController = new TemperatureController(temperatureService);
  });

  describe('calcTemperature', () => {
    it('should return correct results for 0 celcius', () => {
      const result = { kelvin: '273.15', celsius: '0', fahrenheit: '32' };

      expect(temperatureController.calcTemperature('celsius', '0')).toEqual(
        result,
      );
    });

    it('should return correct results for 273.15 kelvin', () => {
      const result = { kelvin: '273.15', celsius: '0', fahrenheit: '32' };

      expect(temperatureController.calcTemperature('kelvin', '273.15')).toEqual(
        result,
      );
    });

    it('should return correct results for 32 fahrenheit', () => {
      const result = {
        kelvin: '273.15',
        celsius: '0',
        fahrenheit: '32',
      };

      expect(temperatureController.calcTemperature('fahrenheit', '32')).toEqual(
        result,
      );
    });

    it('should throw exception for invalid number', () => {
      try {
        expect(temperatureController.calcTemperature('fahrenheit', 'abc'));
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
