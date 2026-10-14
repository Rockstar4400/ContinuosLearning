/*
    Source help:
    https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
*/

// Example

declare function functionExample(): { a: number; b: string };

// type T0_RT = string
type T0_RT = ReturnType<() => string>;

// type T1_RT = void
type T1_RT = ReturnType<(s: string) => void>;

// type T2_RT = unknown
type T2_RT = ReturnType<<T>() => T>;

// type T3_RT = number[]
type T3_RT = ReturnType<<T extends U, 
U extends number[]>() => T>;

// type T4_RT = { a: number; b: string; }
type T4_RT = ReturnType<typeof functionExample>;

// type T5_RT = any
type T5_RT = ReturnType<any>;

// type T6_RT = never
type T6_RT = ReturnType<never>;

// type T7_RT = any

/* Type 'string' does not satisfy the constraint 
'(...args: any) => any'. */
type T7_RT = ReturnType<string>;

// type T8_RT = any
/*Type 'Function' does not satisfy the constraint 
'(...args: any) => any'. Type 'Function' provides 
no match for the signature '(...args: any): any'.
*/
type T8_RT = ReturnType<Function>;
