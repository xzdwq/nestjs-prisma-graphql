import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsCreateInput } from './products-create.input';
import { productsUpdateInput } from './products-update.input';

@ArgsType()
export class UpsertOneproductsArgs {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;

    @Field(() => productsCreateInput, {nullable:false})
    create!: productsCreateInput;

    @Field(() => productsUpdateInput, {nullable:false})
    update!: productsUpdateInput;
}
