import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriesMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    slug?: string;
}
