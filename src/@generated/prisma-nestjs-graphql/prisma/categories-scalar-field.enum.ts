import { registerEnumType } from '@nestjs/graphql';

export enum CategoriesScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug"
}


registerEnumType(CategoriesScalarFieldEnum, { name: 'CategoriesScalarFieldEnum', description: undefined })
