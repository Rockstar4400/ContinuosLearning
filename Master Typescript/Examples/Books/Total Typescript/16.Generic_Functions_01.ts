/*
  Generic Functions 01
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

// Generic Function type alias vs generic type

// Type alias for a generic function
type IdentityAli = <T>(arg: T) => void;
//                 ^^^
// Type parameter belongs to the function.

// Generic type
type IdentityGen<T> = (arg: T) => void;
//              ^^^
// Type parameter belongs to the type.

// Exercise:
// Consider this function called getFirstElement 
// that takes an array and returns the first element:
function getFirstElement<T> (arr: T[]) {
  return arr[0]
}

getFirstElement([12, 13, 14])

// Type parameter defaults

// Here you set the default type of T to string. 
// This means that if you don’t pass in a type argument, 
// TypeScript will assume T is string
const createSet = <T = string>(arr?: T[]) =>{
  return new Set(arr);
}

const defaultSet = createSet(); // Set<string>

// The default doesn’t impose a constraint on the type of T. 
// This means you can still pass in any type you want:
const numberSet = createSet<number>([1, 2, 3]); // Set<number>

//If you don’t specify a default and TypeScript can’t infer 
// the type from the runtime arguments, it will default to unknown:
const createSetDefault = <T>(arr?: T[]) => {
  return new Set(arr);
};

const unknownSet = createSetDefault(); // Set<unknown>