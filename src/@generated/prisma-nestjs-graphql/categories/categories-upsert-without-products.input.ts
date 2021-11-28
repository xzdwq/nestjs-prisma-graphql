import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateWithoutProductsInput } from './categories-update-without-products.input';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';

@InputType()
export class categoriesUpsertWithoutProductsInput {

    @Field(() => categoriesUpdateWithoutProductsInput, {nullable:false})
    update!: categoriesUpdateWithoutProductsInput;

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:false})
    create!: categoriesCreateWithoutProductsInput;
}
