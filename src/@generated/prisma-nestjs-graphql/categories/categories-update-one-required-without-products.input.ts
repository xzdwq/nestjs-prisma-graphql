import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';
import { categoriesCreateOrConnectWithoutProductsInput } from './categories-create-or-connect-without-products.input';
import { categoriesUpsertWithoutProductsInput } from './categories-upsert-without-products.input';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesUpdateWithoutProductsInput } from './categories-update-without-products.input';

@InputType()
export class categoriesUpdateOneRequiredWithoutProductsInput {

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:true})
    create?: categoriesCreateWithoutProductsInput;

    @Field(() => categoriesCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput;

    @Field(() => categoriesUpsertWithoutProductsInput, {nullable:true})
    upsert?: categoriesUpsertWithoutProductsInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    connect?: categoriesWhereUniqueInput;

    @Field(() => categoriesUpdateWithoutProductsInput, {nullable:true})
    update?: categoriesUpdateWithoutProductsInput;
}
