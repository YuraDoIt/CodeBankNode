import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller()
export class BankController {
  @Get('/text')
  getInfo() {
    return 'info';
  }
}
