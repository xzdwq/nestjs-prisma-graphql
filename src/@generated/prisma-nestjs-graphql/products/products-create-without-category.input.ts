import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class productsCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    price!: number;
}
