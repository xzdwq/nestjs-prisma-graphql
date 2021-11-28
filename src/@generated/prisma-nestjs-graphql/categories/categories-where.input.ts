import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductsListRelationFilter } from '../prisma/products-list-relation-filter.input';

@InputType()
export class categoriesWhereInput {

    @Field(() => [categoriesWhereInput], {nullable:true})
    AND?: Array<categoriesWhereInput>;

    @Field(() => [categoriesWhereInput], {nullable:true})
    OR?: Array<categoriesWhereInput>;

    @Field(() => [categoriesWhereInput], {nullable:true})
    NOT?: Array<categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => ProductsListRelationFilter, {nullable:true})
    products?: ProductsListRelationFilter;
}
