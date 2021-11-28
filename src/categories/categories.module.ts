import { Module } from '@nestjs/common';

import { CategoriesService } from '@src/categories/categories.service';
import { CategoriesResolver } from '@src/categories/categories.resolver';

@Module({
  providers: [
    CategoriesService,
    CategoriesResolver
  ]
})
export class CategoriesModule {}
