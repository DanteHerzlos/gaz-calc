import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';

@Module({
  providers: [TemperatureService],
  controllers: [TemperatureController],
})
export class TemperatureModule {}
