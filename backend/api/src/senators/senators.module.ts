import { Module } from '@nestjs/common';
import { SenatorsService } from './senators.service';
import { SenatorsController } from './senators.controller';

@Module({
  controllers: [SenatorsController],
  providers: [SenatorsService],
})
export class SenatorsModule {}