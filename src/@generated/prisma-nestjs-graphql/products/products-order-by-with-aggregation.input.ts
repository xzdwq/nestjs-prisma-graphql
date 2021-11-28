import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { productsCountOrderByAggregateInput } from './products-count-order-by-aggregate.input';
import { productsAvgOrderByAggregateInput } from './products-avg-order-by-aggregate.input';
import { productsMaxOrderByAggregateInput } from './products-max-order-by-aggregate.input';
import { productsMinOrderByAggregateInput } from './products-min-order-by-aggregate.input';
import { productsSumOrderByAggregateInput } from './products-sum-order-by-aggregate.input';

@InputType()
export class productsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => productsCountOrderByAggregateInput, {nullable:true})
    _count?: productsCountOrderByAggregateInput;

    @Field(() => productsAvgOrderByAggregateInput, {nullable:true})
    _avg?: productsAvgOrderByAggregateInput;

    @Field(() => productsMaxOrderByAggregateInput, {nullable:true})
    _max?: productsMaxOrderByAggregateInput;

    @Field(() => productsMinOrderByAggregateInput, {nullable:true})
    _min?: productsMinOrderByAggregateInput;

    @Field(() => productsSumOrderByAggregateInput, {nullable:true})
    _sum?: productsSumOrderByAggregateInput;
}
