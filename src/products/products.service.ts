import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

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
    return this.products.push({
      ...productsDto,
      id: Date.now().toString()
    })
  }

  update(productsDto: UpdateProductsDto) {
    let resultIndex: number = this.products.findIndex( p => p.id === productsDto.id)
    return this.products[resultIndex] = productsDto
  }

}
