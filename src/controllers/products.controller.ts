import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':id')
  getOne(@Param('id') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
     id,
     payload,
      };
  }

  @Delete(':id')
  upddeleteate(@Param('id') id: number) {
    return id;
  }

}
