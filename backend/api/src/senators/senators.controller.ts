import { Controller, Get, Query } from '@nestjs/common';

@Controller('senators')
export class SenatorsController {
  @Get()
  getSenators(@Query('state') state: string) {
    return {
      state,
      senators: [
        { name: 'Senator One', party: 'D' },
        { name: 'Senator Two', party: 'R' },
      ],
    };
  }
}