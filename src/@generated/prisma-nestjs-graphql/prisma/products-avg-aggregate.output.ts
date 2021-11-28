import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProductsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    category_id?: number;

    @Field(() => Float, {nullable:true})
    price?: number;
}
