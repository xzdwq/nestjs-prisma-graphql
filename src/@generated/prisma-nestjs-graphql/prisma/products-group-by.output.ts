import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductsCountAggregate } from './products-count-aggregate.output';
import { ProductsAvgAggregate } from './products-avg-aggregate.output';
import { ProductsSumAggregate } from './products-sum-aggregate.output';
import { ProductsMinAggregate } from './products-min-aggregate.output';
import { ProductsMaxAggregate } from './products-max-aggregate.output';

@ObjectType()
export class ProductsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ProductsCountAggregate, {nullable:true})
    _count?: ProductsCountAggregate;

    @Field(() => ProductsAvgAggregate, {nullable:true})
    _avg?: ProductsAvgAggregate;

    @Field(() => ProductsSumAggregate, {nullable:true})
    _sum?: ProductsSumAggregate;

    @Field(() => ProductsMinAggregate, {nullable:true})
    _min?: ProductsMinAggregate;

    @Field(() => ProductsMaxAggregate, {nullable:true})
    _max?: ProductsMaxAggregate;
}
