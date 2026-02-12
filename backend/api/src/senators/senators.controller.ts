import { Controller, Get, Query } from '@nestjs/common';
import { SenatorsService } from './senators.service';

@Controller('senators')
export class SenatorsController {
  constructor(private readonly senatorsService: SenatorsService) {}

  @Get()
  async getSenators(@Query('state') state: string) {
    return this.senatorsService.getSenatorsByState(state);
  }
}