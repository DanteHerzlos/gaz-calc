import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ConsumptionUnits } from './constants/ConsumptionUnits';
import { ConsumptionService } from './consumption.service';
import {
  Consumption,
  ConsumtionType,
} from './interfaces/consumption.interface';

@ApiTags('consumption')
@Controller('/api/consumption')
export class ConsumptionController {
  constructor(private consumptionService: ConsumptionService) {}
  @Get()
  @ApiOperation({
    description: 'Преобразует из выбранной ед. измерения во все остальные',
  })
  @ApiQuery({
    name: 'name',
    description: 'Eд. измерения',
    enum: ConsumptionUnits,
  })
  @ApiQuery({
    name: 'number',
    type: Number,
    description: 'Значение',
  })
  calcConsumption(
    @Query('name') name: ConsumtionType,
    @Query('number') number: string,
  ): Consumption {
    return this.consumptionService.calcConsumption(name, number);
  }
}
