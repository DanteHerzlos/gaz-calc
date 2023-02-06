import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { TemperatureUnits } from './constants/TemperatureUnits';
import {
  Temperature,
  TemperatureType,
} from './interfaces/temperature.interface';
import { TemperatureService } from './temperature.service';

@ApiTags('temperature')
@Controller('/api/temperature')
export class TemperatureController {
  constructor(private temperatureService: TemperatureService) {}
  @Get()
  @ApiOperation({
    description: 'Преобразует из выбранной ед. измерения во все остальные',
  })
  @ApiQuery({
    name: 'name',
    description: 'Eд. измерения',
    enum: TemperatureUnits,
  })
  @ApiQuery({
    name: 'number',
    type: Number,
    description: 'Значение',
  })
  calcTemperature(
    @Query('name') name: TemperatureType,
    @Query('number') number: string,
  ): Temperature {
    return this.temperatureService.calcTemperature(name, number);
  }
}
