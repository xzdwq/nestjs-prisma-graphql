import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsCreateManyInput } from './products-create-many.input';

@ArgsType()
export class CreateManyproductsArgs {

    @Field(() => [productsCreateManyInput], {nullable:false})
    data!: Array<productsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
