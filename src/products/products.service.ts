import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService {
  products = []

  getAll(){
    return this.products
  }

  getById(id: string){
    return this.products.find(p => p.id === id)
  }

  create(productsDto: CreateProductsDto){
    this.products.push({
      ...productsDto,
      id: Date.now().toString()
    })
  }
}
