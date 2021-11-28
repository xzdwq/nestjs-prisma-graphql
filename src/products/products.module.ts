import { Module } from '@nestjs/common';
import { ProductsService } from '@src/products/products.service';
import { ProductsResolver } from '@src/products/products.resolver';

@Module({
  providers: [
    ProductsService,
    ProductsResolver
  ]
})
export class ProductsModule {}
