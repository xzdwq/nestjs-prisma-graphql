import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsCreateInput } from './products-create.input';

@ArgsType()
export class CreateOneproductsArgs {

    @Field(() => productsCreateInput, {nullable:false})
    data!: productsCreateInput;
}
