import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutCategoryInput } from './products-create-without-category.input';
import { productsCreateOrConnectWithoutCategoryInput } from './products-create-or-connect-without-category.input';
import { productsUpsertWithWhereUniqueWithoutCategoryInput } from './products-upsert-with-where-unique-without-category.input';
import { productsCreateManyCategoryInputEnvelope } from './products-create-many-category-input-envelope.input';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateWithWhereUniqueWithoutCategoryInput } from './products-update-with-where-unique-without-category.input';
import { productsUpdateManyWithWhereWithoutCategoryInput } from './products-update-many-with-where-without-category.input';
import { productsScalarWhereInput } from './products-scalar-where.input';

@InputType()
export class productsUncheckedUpdateManyWithoutCategoryInput {

    @Field(() => [productsCreateWithoutCategoryInput], {nullable:true})
    create?: Array<productsCreateWithoutCategoryInput>;

    @Field(() => [productsCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<productsCreateOrConnectWithoutCategoryInput>;

    @Field(() => [productsUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<productsUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => productsCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: productsCreateManyCategoryInputEnvelope;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    set?: Array<productsWhereUniqueInput>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    disconnect?: Array<productsWhereUniqueInput>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    delete?: Array<productsWhereUniqueInput>;

    @Field(() => [productsWhereUniqueInput], {nullable:true})
    connect?: Array<productsWhereUniqueInput>;

    @Field(() => [productsUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<productsUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [productsUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<productsUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    deleteMany?: Array<productsScalarWhereInput>;
}
