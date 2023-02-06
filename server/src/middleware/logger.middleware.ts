import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      if (res.statusCode >= 400) {
        this.logger.error(
          `Logging HTTP request ${req.method} ${req.originalUrl} ${res.statusCode}`,
        );
      } else {
        this.logger.log(
          `Logging HTTP request ${req.method} ${req.originalUrl} ${res.statusCode}`,
        );
      }
    });

    next();
  }
}
