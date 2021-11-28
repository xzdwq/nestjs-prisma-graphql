
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
    products?: Nullable<string>;
}

export abstract class IQuery {
    abstract categories(orderBy?: Nullable<OrderByParams>): Nullable<Categories>[] | Promise<Nullable<Categories>[]>;

    abstract category(id: number): Nullable<Categories> | Promise<Nullable<Categories>>;

    abstract totalCategories(): number | Promise<number>;
}

export class Result {
    total: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
