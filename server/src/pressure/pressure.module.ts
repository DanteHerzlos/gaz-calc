import { Module } from '@nestjs/common';
import { PressureService } from './pressure.service';
import { PressureController } from './pressure.controller';

@Module({
  providers: [PressureService],
  controllers: [PressureController],
})
export class PressureModule {}
