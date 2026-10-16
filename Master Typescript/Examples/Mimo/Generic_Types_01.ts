/*
    Source help:
    https://mimo.org/glossary/typescript/generic-types  
    https://www.convex.dev/typescript/core-concepts/object-oriented-programming/typescript-extends
*/

// Example:
function echo<T>(value: T): T{
    return value;
}

// Ways to call it
echo<number>(42);         // Explicitly specifying type
echo("hello");            // TypeScript infers 'string'

// Generic Interface
interface Box<T>{
    content: T;
}

const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: "text" };

// Generic class
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  get(): T {
    return this.value;
  }
}

// Working with multiple generic types
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const result = pair<number, string>(1, "one");

// Applying TypeScript's extends in Generic Constraints
/*######################################################*/
// Without a constraint, we can't access properties on T
function getPropertyUnsafe<T>(obj: T, key: string): any {
  //return obj[key]; 
  // Error: Property 'key' does not exist on type 'T'
}

// With a constraint, we ensure T has the required structure
function getProperty<T extends object>(obj: T, key: keyof T):
T[keyof T] {
  return obj[key]; 
  // Works because T is guaranteed to have properties
}

// Even more specific constraints
function getNameProperty<T extends { name: string }>(obj: T): 
string {
  return obj.name; 
  // Safe access to the name property
}

const user = { name: "Alice", role: "Admin" };
const nameConstraint = getNameProperty(user); // Returns "Alice"
/*######################################################*/

// Constraints with generics
function logLength<T extends { length: number }>(input: T): void {
  console.log(input.length);
}

logLength("Hello"); // Works
logLength([1, 2, 3]); // Works
// logLength(10); // Error: number doesn't have 'length'

// Default type parameters
// You can provide default types to generic parameters. 
// If no type is specified, the default will be used.
function wrap<T = string>(value: T): T[]{
    return [value];
}

wrap("hello"); // inferred as string[]
wrap(123);     // overrides default, inferred as number[]

// Generic Types with Promises and Asynchronous Code
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

type User = { id: number; name: string };

fetchData<User>("/api/user").then((user) => {
  console.log(user.name); // user is of type 'User'
});

// Type Inference with Generics

// When calling generic functions, 
// TypeScript often infers the type automatically.
function firstElement<T>(arr: T[]): T{
    return arr[0];
}

const first = firstElement([1, 2, 3]); // inferred as number
