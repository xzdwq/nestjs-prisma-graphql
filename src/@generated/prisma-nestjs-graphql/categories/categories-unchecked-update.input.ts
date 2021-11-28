import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { productsUncheckedUpdateManyWithoutCategoryInput } from '../products/products-unchecked-update-many-without-category.input';

@InputType()
export class categoriesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => productsUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    products?: productsUncheckedUpdateManyWithoutCategoryInput;
}
