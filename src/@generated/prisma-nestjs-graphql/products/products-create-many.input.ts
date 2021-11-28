import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class productsCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    price!: number;
}
