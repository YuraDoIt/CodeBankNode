import { Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';

@Controller()
export class testController {
  @Get('/')
  some() {
    return 'Hello111';
  }
}
