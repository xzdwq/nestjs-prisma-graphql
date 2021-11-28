import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsUpdateManyMutationInput } from './products-update-many-mutation.input';
import { productsWhereInput } from './products-where.input';

@ArgsType()
export class UpdateManyproductsArgs {

    @Field(() => productsUpdateManyMutationInput, {nullable:false})
    data!: productsUpdateManyMutationInput;

    @Field(() => productsWhereInput, {nullable:true})
    where?: productsWhereInput;
}
