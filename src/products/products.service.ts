import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { OrderByParams } from '../graphql';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(orderBy?: OrderByParams) {
    const { field = 'id', direction = 'desc' } = orderBy || {}
    return this.prisma.products.findMany({
      include: {
        category: true
      },
      orderBy: { [field]: direction }
    })
  }

  async findOne(productsWhereUniqueInput: Prisma.productsWhereUniqueInput) {
    return this.prisma.products.findUnique({
      where: productsWhereUniqueInput
    });
  }

  async getTotal() {
    const response = await this.prisma.products.aggregate({
      _count: {
        id: true
      }
    })

    return response._count.id
  }
}
