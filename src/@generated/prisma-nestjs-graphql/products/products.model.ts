import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { categories } from '../categories/categories.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class products {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => categories, {nullable:false})
    category?: categories;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    price!: number;
}
