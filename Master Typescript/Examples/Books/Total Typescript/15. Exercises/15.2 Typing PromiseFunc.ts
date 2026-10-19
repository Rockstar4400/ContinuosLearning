
// This PromiseFunc type represents a function that returns 
// a promise:
type PromiseFunc = (input: any) => Promise<any>;

// Here are two example tests that use the PromiseFunc
// type with different inputs that currently have errors:

type Example1 = PromiseFunc<string, string>; 

type test1 = Expect<Equal<Example1, 
(input: string) => Promise<string>>>;

type Example2 = PromiseFunc<boolean, number>; 

type test2 = Expect<Equal<Example2, (input: boolean) => 
    Promise<number>>>;

// The error messages inform us that the PromiseFunc 
// type is not generic. You’re also expecting the 
// PromiseFunc type to take in two type arguments: 
// the input type and the return type of the promise.

// Your task is to update PromiseFunc so that both of the 
// tests pass without errors.

// Solution: