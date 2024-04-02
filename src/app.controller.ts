import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home')
  home (){
    return  'Diana';
  }

  @Get('productos')
  getProductos ( @Query('limit') limit = 100,
  @Query('offset') offset = 0,
  @Query('brand') brand: string,
  ){
    return  `products limit=> ${limit}`;
  }
}
