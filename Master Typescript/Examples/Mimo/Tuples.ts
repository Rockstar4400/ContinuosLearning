/*
    Source help:
    https://mimo.org/glossary/typescript/tuples
*/

// Example:
let pointTuple: [number, number] = [10, 20];

// How to use it:
// Returning multiple value
function getCoordinates(): [number, number] {
  return [42, 17];
}

const [x, y] = getCoordinates();

// Destructuring parameters

function printUser([name, age]: [string, number]) {
  console.log(`${name} is ${age} years old.`);
}

printUser(["Bob", 25]);

// Using Tuples with Status Codes
type APIResponse = [number, string];

const success: APIResponse = [200, "OK"];
const failure: APIResponse = [500, "Internal Server Error"];

// Labeling tuples for better readability
type UserTuple = [id: number, name: string];

const user: UserTuple = [1, "Charlie"];

// Optional tuple elements
type LogEntry = [message: string, timestamp?: Date];

const entry1: LogEntry = ["System started"];
const entry2: LogEntry = ["System shutdown", new Date()];

// Tuple with rest elements
type Names = [string, ...string[]];

const friends: Names = ["Alex", "Taylor", "Jordan"];

// Spread tuples into function arguments
function sum(a: number, b: number): number {
  return a + b;
}

const values: [number, number] = [3, 7];
console.log(sum(...values));

// Tuple type inference
const fixed: [number, number] = [1, 2]; // inferred as tuple
const loose = [1, 2]; // inferred as number[]

const readOnly = [1, 2] as const; // inferred as readonly [1, 2]