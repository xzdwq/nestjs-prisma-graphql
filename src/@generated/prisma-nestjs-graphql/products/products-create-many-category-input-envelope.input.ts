import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateManyCategoryInput } from './products-create-many-category.input';

@InputType()
export class productsCreateManyCategoryInputEnvelope {

    @Field(() => [productsCreateManyCategoryInput], {nullable:false})
    data!: Array<productsCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
