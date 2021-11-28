import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereUniqueInput } from './products-where-unique.input';

@ArgsType()
export class DeleteOneproductsArgs {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    where!: productsWhereUniqueInput;
}
