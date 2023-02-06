import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PressureUnits } from './constants/PressureUnits';
import { Pressure, PressureType } from './interfaces/pressure.interface';
import { PressureService } from './pressure.service';

@ApiTags('pressure')
@Controller('/api/pressure')
export class PressureController {
  constructor(private pressureService: PressureService) {}
  @Get()
  @ApiOperation({
    description: 'Преобразует из выбранной ед. измерения во все остальные',
  })
  @ApiQuery({
    name: 'name',
    description: 'Eд. измерения',
    enum: PressureUnits,
  })
  @ApiQuery({
    name: 'number',
    type: Number,
    description: 'Значение',
  })
  calcPressure(
    @Query('name') name: PressureType,
    @Query('number') number: string,
  ): Pressure {
    return this.pressureService.calcPressure(name, number);
  }
}
