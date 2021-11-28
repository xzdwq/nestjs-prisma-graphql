import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsCreateWithoutCategoryInput } from './products-create-without-category.input';

@InputType()
export class productsCreateOrConnectWithoutCategoryInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;

    @Field(() => productsCreateWithoutCategoryInput, {nullable:false})
    create!: productsCreateWithoutCategoryInput;
}
