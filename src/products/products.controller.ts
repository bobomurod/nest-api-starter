import { Controller, Get, Param, Post, Put, Delete, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';
// import { Request } from 'express';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {

  }

  @Get()
  getProducts(): string[] {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param() params): string {
    return this.productService.getById(params.id)
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
