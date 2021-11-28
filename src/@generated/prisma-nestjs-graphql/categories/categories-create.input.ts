import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateNestedManyWithoutCategoryInput } from '../products/products-create-nested-many-without-category.input';

@InputType()
export class categoriesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => productsCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: productsCreateNestedManyWithoutCategoryInput;
}
