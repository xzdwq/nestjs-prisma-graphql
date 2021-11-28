import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { categoriesUpdateOneRequiredWithoutProductsInput } from '../categories/categories-update-one-required-without-products.input';

@InputType()
export class productsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => categoriesUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: categoriesUpdateOneRequiredWithoutProductsInput;
}
