import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule, PrismaClientExceptionFilter } from 'nestjs-prisma';
import { APP_FILTER } from '@nestjs/core';

import configuration from '@cfg/configuration';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { CategoriesModule } from '@src/categories/categories.module';
import { ProductsModule } from '@src/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV}`
      ],
      load: [
        configuration
      ],
    }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          prismaOptions: {
            log: config.get('database').log,
            datasources: {
              db: {
                url: config.get('database').revoluterra.url
              }
            }
          },
          explicitConnect: config.get('database').explicit
        }
      }
    }),
    CategoriesModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter,
    },
    AppService
  ],
})
export class AppModule {}
