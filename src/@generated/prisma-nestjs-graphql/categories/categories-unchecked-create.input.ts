import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productsUncheckedCreateNestedManyWithoutCategoryInput } from '../products/products-unchecked-create-nested-many-without-category.input';

@InputType()
export class categoriesUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => productsUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: productsUncheckedCreateNestedManyWithoutCategoryInput;
}
