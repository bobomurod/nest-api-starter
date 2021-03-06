import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(): string[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): string {
    return this.productService.getById(params.id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductsDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removed ${id}`;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductsDto) {
    return this.productService.update(updateProductDto);
  }
}
