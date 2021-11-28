import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { products } from '../products/products.model';
import { CategoriesCount } from '../prisma/categories-count.output';

@ObjectType()
export class categories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [products], {nullable:true})
    products?: Array<products>;

    @Field(() => CategoriesCount, {nullable:false})
    _count?: CategoriesCount;
}
