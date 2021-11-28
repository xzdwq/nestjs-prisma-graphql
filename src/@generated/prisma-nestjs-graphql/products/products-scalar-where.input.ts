import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class productsScalarWhereInput {

    @Field(() => [productsScalarWhereInput], {nullable:true})
    AND?: Array<productsScalarWhereInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    OR?: Array<productsScalarWhereInput>;

    @Field(() => [productsScalarWhereInput], {nullable:true})
    NOT?: Array<productsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;
}
