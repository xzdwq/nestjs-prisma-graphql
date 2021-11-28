import {
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql';
import { OrderByParams } from '../graphql';
// import { PubSub } from 'graphql-subscriptions';

import { CategoriesService } from '@src/categories/categories.service';

// const pubSub = new PubSub()

@Resolver('categories')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query('categories')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
  ) {
    return this.categoriesService.findAll(orderBy);
  }

  @Query('category')
  findOne(@Args('id') id: number) {
    return this.categoriesService.findOne({ id });
  }

  @Query('totalCategories')
  totalCategories() {
    return this.categoriesService.getTotal();
  }
}