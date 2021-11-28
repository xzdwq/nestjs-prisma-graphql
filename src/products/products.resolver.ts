import {
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql';
import { OrderByParams } from '../graphql';
// import { PubSub } from 'graphql-subscriptions';

import { ProductsService } from '@src/products/products.service';

// const pubSub = new PubSub()

@Resolver('products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query('products')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
  ) {
    return this.productsService.findAll(orderBy);
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productsService.findOne({ id });
  }

  @Query('totalProducts')
  totalProducts() {
    return this.productsService.getTotal();
  }
}