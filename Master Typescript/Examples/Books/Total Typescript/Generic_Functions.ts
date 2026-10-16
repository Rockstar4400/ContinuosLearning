/*
  Generic Functions  
*/

// Example
const set = new Set<number>([1, 2, 3]);

// what makes a function generic?
function identityFunc<T>(arg: T): T{
    return arg;
}

// In an arrow way
const identityArr = <T>(arg: T): T => arg;

// Generic Function as a type
type Identity = <T>(arg: T) => void;
const identityType: Identity = (arg) => arg;

// Using Generic Function - ALL are valid
const answerFunc = identityFunc<number>(42);
const answerArr = identityArr<number>(42);
const answerFuncType = identityType<number>(42);


// Type alias for a generic function
type IdentityAli = <T>(arg: T) => void;
//                 ^^^
// Type parameter belongs to the function.

// Generic type
type IdentityGen<T> = (arg: T) => void;
//              ^^^
// Type parameter belongs to the type.