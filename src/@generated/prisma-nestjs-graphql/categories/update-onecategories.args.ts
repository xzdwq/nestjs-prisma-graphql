import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesUpdateInput } from './categories-update.input';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@ArgsType()
export class UpdateOnecategoriesArgs {

    @Field(() => categoriesUpdateInput, {nullable:false})
    data!: categoriesUpdateInput;

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    where!: categoriesWhereUniqueInput;
}
