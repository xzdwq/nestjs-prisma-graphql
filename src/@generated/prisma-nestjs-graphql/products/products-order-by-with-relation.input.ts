import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { categoriesOrderByWithRelationInput } from '../categories/categories-order-by-with-relation.input';

@InputType()
export class productsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => categoriesOrderByWithRelationInput, {nullable:true})
    category?: categoriesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}
