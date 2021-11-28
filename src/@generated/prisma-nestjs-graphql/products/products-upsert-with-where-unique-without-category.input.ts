import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateWithoutCategoryInput } from './products-update-without-category.input';
import { productsCreateWithoutCategoryInput } from './products-create-without-category.input';

@InputType()
export class productsUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;

    @Field(() => productsUpdateWithoutCategoryInput, {nullable:false})
    update!: productsUpdateWithoutCategoryInput;

    @Field(() => productsCreateWithoutCategoryInput, {nullable:false})
    create!: productsCreateWithoutCategoryInput;
}
