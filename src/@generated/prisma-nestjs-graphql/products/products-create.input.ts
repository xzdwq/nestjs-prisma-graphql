import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesCreateNestedOneWithoutProductsInput } from '../categories/categories-create-nested-one-without-products.input';

@InputType()
export class productsCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => categoriesCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: categoriesCreateNestedOneWithoutProductsInput;
}
