import { Controller, Get, Param, Post, Req } from '@nestjs/common';
// import { Request } from 'express';

@Controller('products')
export class ProductsController {

  @Get()
  getProducts(): string {
    return "Get Products"
  }

  @Get(':id')
  getProduct(@Param() params): string {
    return params.id
  }

  @Post()
  postProduct(@Req() request): string {
    return request.body
  }
}
