import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts() {
    const products = await this.prisma.products.findMany()

    return {
      success: true,
      data: products
    }
  }
}
