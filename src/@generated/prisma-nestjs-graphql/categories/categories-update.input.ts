import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { productsUpdateManyWithoutCategoryInput } from '../products/products-update-many-without-category.input';

@InputType()
export class categoriesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => productsUpdateManyWithoutCategoryInput, {nullable:true})
    products?: productsUpdateManyWithoutCategoryInput;
}
