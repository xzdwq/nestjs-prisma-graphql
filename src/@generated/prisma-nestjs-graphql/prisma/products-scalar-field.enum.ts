import { registerEnumType } from '@nestjs/graphql';

export enum ProductsScalarFieldEnum {
    id = "id",
    category_id = "category_id",
    name = "name",
    slug = "slug",
    price = "price"
}


registerEnumType(ProductsScalarFieldEnum, { name: 'ProductsScalarFieldEnum', description: undefined })
