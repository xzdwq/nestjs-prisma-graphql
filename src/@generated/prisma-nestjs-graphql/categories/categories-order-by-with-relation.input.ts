import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { productsOrderByRelationAggregateInput } from '../products/products-order-by-relation-aggregate.input';

@InputType()
export class categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => productsOrderByRelationAggregateInput, {nullable:true})
    products?: productsOrderByRelationAggregateInput;
}
