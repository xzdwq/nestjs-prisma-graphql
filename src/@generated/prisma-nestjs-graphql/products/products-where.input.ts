import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { CategoriesRelationFilter } from '../prisma/categories-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class productsWhereInput {

    @Field(() => [productsWhereInput], {nullable:true})
    AND?: Array<productsWhereInput>;

    @Field(() => [productsWhereInput], {nullable:true})
    OR?: Array<productsWhereInput>;

    @Field(() => [productsWhereInput], {nullable:true})
    NOT?: Array<productsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => CategoriesRelationFilter, {nullable:true})
    category?: CategoriesRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;
}
