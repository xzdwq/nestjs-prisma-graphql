import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLDateTime } from 'graphql-scalars';
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
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      }
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
