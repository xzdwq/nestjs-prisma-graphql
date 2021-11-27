import {
  Controller,
  Get
} from '@nestjs/common';
import { ProductsService } from '@src/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productsService.getProducts()
  }
}
