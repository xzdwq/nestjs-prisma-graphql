import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { categoriesCreateInput } from './categories-create.input';
import { categoriesUpdateInput } from './categories-update.input';

@ArgsType()
export class UpsertOnecategoriesArgs {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    where!: categoriesWhereUniqueInput;

    @Field(() => categoriesCreateInput, {nullable:false})
    create!: categoriesCreateInput;

    @Field(() => categoriesUpdateInput, {nullable:false})
    update!: categoriesUpdateInput;
}
