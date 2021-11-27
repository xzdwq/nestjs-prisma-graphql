import {
  Controller,
  Get
} from '@nestjs/common';
import { CategoriesService } from '@src/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly ctegoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return this.ctegoriesService.getCategories()
  }
}
