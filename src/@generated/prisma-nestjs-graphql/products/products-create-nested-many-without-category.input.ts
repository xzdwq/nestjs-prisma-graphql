import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCategoryInput } from './products-create-without-category.input';
import { productsCreateOrConnectWithoutCategoryInput } from './products-create-or-connect-without-category.input';
import { productsCreateManyCategoryInputEnvelope } from './products-create-many-category-input-envelope.input';
import { productsWhereUniqueInput } from './products-where-unique.input';

@InputType()
export class productsCreateNestedManyWithoutCategoryInput {

    @Field(() => [productsCreateWithoutCategoryInput], {nullable:true})
    create?: Array<productsCreateWithoutCategoryInput>;

    @Field(() => [productsCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<productsCreateOrConnectWithoutCategoryInput>;

    @Field(() => productsCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: productsCreateManyCategoryInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    connect?: Array<productsWhereUniqueInput>;
}
