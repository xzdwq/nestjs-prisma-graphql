
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Categories {
    id?: Nullable<number>;
    name?: Nullable<string>;
    slug?: Nullable<string>;
    products?: Nullable<Products[]>;
}

export abstract class IQuery {
    abstract categories(orderBy?: Nullable<OrderByParams>): Nullable<Categories>[] | Promise<Nullable<Categories>[]>;

    abstract category(id: number): Nullable<Categories> | Promise<Nullable<Categories>>;

    abstract totalCategories(): number | Promise<number>;

    abstract products(orderBy?: Nullable<OrderByParams>): Nullable<Products>[] | Promise<Nullable<Products>[]>;

    abstract product(id: number): Nullable<Products> | Promise<Nullable<Products>>;

    abstract totalProducts(): number | Promise<number>;
}

export class Products {
    id?: Nullable<number>;
    category?: Nullable<Categories[]>;
    category_id?: Nullable<number>;
    name?: Nullable<string>;
    slug?: Nullable<string>;
    price?: Nullable<number>;
}

export type DateTime = any;
type Nullable<T> = T | null;
