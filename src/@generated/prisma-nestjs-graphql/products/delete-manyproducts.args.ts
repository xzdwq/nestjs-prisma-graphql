import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';

@ArgsType()
export class DeleteManyproductsArgs {

    @Field(() => productsWhereInput, {nullable:true})
    where?: productsWhereInput;
}
