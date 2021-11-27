import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { AppService } from '@src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
