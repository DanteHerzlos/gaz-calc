import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TemperatureModule } from './temperature/temperature.module';
import { PressureModule } from './pressure/pressure.module';
import { ConsumptionModule } from './consumption/consumption.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..',  'client', 'dist'),
    // }),
    TemperatureModule,
    PressureModule,
    ConsumptionModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
