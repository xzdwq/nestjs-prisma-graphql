import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    price?: number;
}
