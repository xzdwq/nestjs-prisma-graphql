import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesUpdateManyMutationInput } from './categories-update-many-mutation.input';
import { categoriesWhereInput } from './categories-where.input';

@ArgsType()
export class UpdateManycategoriesArgs {

    @Field(() => categoriesUpdateManyMutationInput, {nullable:false})
    data!: categoriesUpdateManyMutationInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    where?: categoriesWhereInput;
}
