import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';

@ArgsType()
export class DeleteManycategoriesArgs {

    @Field(() => categoriesWhereInput, {nullable:true})
    where?: categoriesWhereInput;
}
