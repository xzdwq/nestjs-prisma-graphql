import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesCreateManyInput } from './categories-create-many.input';

@ArgsType()
export class CreateManycategoriesArgs {

    @Field(() => [categoriesCreateManyInput], {nullable:false})
    data!: Array<categoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
