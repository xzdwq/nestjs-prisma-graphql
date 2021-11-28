import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateWithoutCategoryInput } from './products-update-without-category.input';

@InputType()
export class productsUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;

    @Field(() => productsUpdateWithoutCategoryInput, {nullable:false})
    data!: productsUpdateWithoutCategoryInput;
}
