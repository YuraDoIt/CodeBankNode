import { Controller, Get } from '@nestjs/common';

@Controller()
export class testController {
  @Get('/')
  some() {
    return 'Hello111';
  }
}
