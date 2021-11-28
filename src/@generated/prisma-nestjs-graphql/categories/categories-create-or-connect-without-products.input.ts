import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';

@InputType()
export class categoriesCreateOrConnectWithoutProductsInput {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    where!: categoriesWhereUniqueInput;

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:false})
    create!: categoriesCreateWithoutProductsInput;
}
