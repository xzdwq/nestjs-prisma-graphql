import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { productsOrderByWithRelationInput } from './products-order-by-with-relation.input';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductsScalarFieldEnum } from '../prisma/products-scalar-field.enum';

@ArgsType()
export class FindManyproductsArgs {

    @Field(() => productsWhereInput, {nullable:true})
    where?: productsWhereInput;

    @Field(() => [productsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<productsOrderByWithRelationInput>;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    cursor?: productsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductsScalarFieldEnum>;
}
