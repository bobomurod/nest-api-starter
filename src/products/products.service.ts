import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  async create(productsDto: CreateProductsDto): Promise<Product> {
    const createdProduct: ProductDocument = new this.productModel(productsDto);
    return createdProduct.save();
  }

  update(productsDto: UpdateProductsDto) {
    const resultIndex: number = this.products.findIndex(
      (p) => p.id === productsDto.id,
    );
    return (this.products[resultIndex] = productsDto);
  }
}
