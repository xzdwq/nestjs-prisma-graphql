import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesCreateInput } from './categories-create.input';

@ArgsType()
export class CreateOnecategoriesArgs {

    @Field(() => categoriesCreateInput, {nullable:false})
    data!: categoriesCreateInput;
}
