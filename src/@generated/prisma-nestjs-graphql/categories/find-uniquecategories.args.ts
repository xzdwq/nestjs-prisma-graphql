import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';

@ArgsType()
export class FindUniquecategoriesArgs {

    @Field(() => categoriesWhereUniqueInput, {nullable:false})
    where!: categoriesWhereUniqueInput;
}
