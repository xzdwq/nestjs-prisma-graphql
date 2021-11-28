import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';
import { categoriesCreateOrConnectWithoutProductsInput } from './categories-create-or-connect-without-products.input';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class categoriesCreateNestedOneWithoutProductsInput {

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:true})
    create?: categoriesCreateWithoutProductsInput;

    @Field(() => categoriesCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    connect?: categoriesWhereUniqueInput;
}
