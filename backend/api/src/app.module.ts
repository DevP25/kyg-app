import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenatorsController } from './senators/senators.controller';

@Module({
  controllers: [SenatorsController],
})

export class AppModule {}
