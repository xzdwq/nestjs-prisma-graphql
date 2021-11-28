import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { categoriesOrderByWithRelationInput } from './categories-order-by-with-relation.input';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class categoriesAggregateArgs {

    @Field(() => categoriesWhereInput, {nullable:true})
    where?: categoriesWhereInput;

    @Field(() => [categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<categoriesOrderByWithRelationInput>;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    cursor?: categoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
