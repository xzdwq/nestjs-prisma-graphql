import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { OrderByParams } from '../graphql';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(orderBy?: OrderByParams) {
    const { field = 'id', direction = 'desc' } = orderBy || {}
    return this.prisma.categories.findMany({
      include: {
        products: true
      },
      orderBy: { [field]: direction }
    })
  }

  async findOne(categoriesWhereUniqueInput: Prisma.categoriesWhereUniqueInput) {
    return this.prisma.categories.findUnique({
      where: categoriesWhereUniqueInput,
      include: {
        products: true
      }
    });
  }

  async getTotal() {
    const response = await this.prisma.categories.aggregate({
      _count: {
        id: true
      }
    })

    return response._count.id
  }
}
