import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories() {
    const categories = await this.prisma.categories.findMany()

    return {
      success: true,
      data: categories
    }
  }
}
