import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { productsOrderByWithAggregationInput } from './products-order-by-with-aggregation.input';
import { ProductsScalarFieldEnum } from '../prisma/products-scalar-field.enum';
import { productsScalarWhereWithAggregatesInput } from './products-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class productsGroupByArgs {

    @Field(() => productsWhereInput, {nullable:true})
    where?: productsWhereInput;

    @Field(() => [productsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<productsOrderByWithAggregationInput>;

    @Field(() => [ProductsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductsScalarFieldEnum>;

    @Field(() => productsScalarWhereWithAggregatesInput, {nullable:true})
    having?: productsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
