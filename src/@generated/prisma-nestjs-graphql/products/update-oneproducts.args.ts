import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsUpdateInput } from './products-update.input';
import { productsWhereUniqueInput } from './products-where-unique.input';

@ArgsType()
export class UpdateOneproductsArgs {

    @Field(() => productsUpdateInput, {nullable:false})
    data!: productsUpdateInput;

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;
}
