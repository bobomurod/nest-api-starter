import { Controller, Get, Param, Post, Put, Delete, Body} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
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
  create(@Body() createProductDto: CreateProductsDto){
    return `Title: ${createProductDto.title} price: ${createProductDto.price}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removed ${id}`
  }

  @Put(':id')
  update(@Param() updateProductDto: UpdateProductsDto, @Param('id') id:string){
    return `Updated ${id}`
  }
}
