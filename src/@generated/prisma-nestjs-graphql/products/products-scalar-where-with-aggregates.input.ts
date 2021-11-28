import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class productsScalarWhereWithAggregatesInput {

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => [productsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<productsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;
}
