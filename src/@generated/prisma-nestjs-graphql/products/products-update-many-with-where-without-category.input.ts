import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsScalarWhereInput } from './products-scalar-where.input';
import { productsUpdateManyMutationInput } from './products-update-many-mutation.input';

@InputType()
export class productsUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => productsScalarWhereInput, {nullable:false})
    where!: productsScalarWhereInput;

    @Field(() => productsUpdateManyMutationInput, {nullable:false})
    data!: productsUpdateManyMutationInput;
}
