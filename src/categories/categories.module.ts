import { Module } from '@nestjs/common';

import { CategoriesService } from '@src/categories/categories.service';
import { CategoriesController } from '@src/categories/categories.controller';
import { CategoriesResolver } from '@src/categories/categories.resolver';

@Module({
  providers: [
    CategoriesService,
    CategoriesResolver
  ],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
