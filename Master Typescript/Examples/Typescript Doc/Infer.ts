/*
    Source help:
    https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
*/

// Inferring within conditional types
type Flatten<Type> = Type extends Array<infer Item> ? Item :Type;

// Extract return type out from function types
type GetReturnType<Type> = Type extends 
(...args: never[]) => infer Return ? Return : never;

// type Num = number
type Num = GetReturnType<() => number>;

// type Str = string
type Str = GetReturnType<(x: string) => string>;

// type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) =>
    boolean[]>;


declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

// type T1_Infer = string | number
type T1_Infer = ReturnType<typeof stringOrNum>;