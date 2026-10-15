/*
    Source help:
    https://mimo.org/glossary/typescript/union
*/

// Example

let value: string | number;
value = "Hello";
value = 42;

// Union vs Enum

// ENUM
enum StatusEnum {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
}

let requestStatus: StatusEnum = StatusEnum.Pending;
console.log(requestStatus) // Output: "PENDING"

// UNION
type StatusUnion = "PENDING" | "APPROVED" | "REJECTED";

let requestStatusUnion: StatusUnion = "PENDING";
console.log(requestStatusUnion); // Output: "PENDING"

// Discriminated Union

type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    if (shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}

console.log(getArea({ kind: "circle", radius: 5 })) // Output: 78.5398
console.log(getArea({ kind: "square", side: 4 })) // Output: 16

// Union from Array

const rolesUnion = ["admin", "user", "guest"] as const;
type RoleUnion = typeof rolesUnion[number];

let userRole: RoleUnion = "admin";

// Flexible Function Parameters

function formatInput(input: string | number){
    return typeof input === "number" ?
    input.toFixed(2) : input.toUpperCase();
}

console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(3.14159)); // Output: "3.14"

// Check type of union
function processUnion(value: string | number){
    if(typeof value === "string"){
        console.log("String", value.toUpperCase());
    }else{
        console.log("Number:", value.toFixed(2));
    }
}

// Cast Union Type
let valueUnion: string | number = "Hello";
let stringValue = valueUnion as string;
console.log(stringValue.toUpperCase()); // "HELLO"

// Check if string is in union type
const validSized = ["small", "medium", "large"] as const;

function isValidSize(size: string): 
size is typeof validSized[number] {
    return validSized.includes(size as any);
}

console.log(isValidSize("medium")) // true
console.log(isValidSize("extra-large")) // false

// Create union type from Array
const directionsUnion = ["north", "south", "east", "west"] as const;
type Direction = typeof directionsUnion[number];

// Distribute Union
type Data<T> = T extends string ? "Text" : "Number";
type Example = Data<string | number>; // "Text" | "Number"

// Union with classes
class DogUnion {
  bark() {
    console.log("Woof!");
  }
}

class CatUnion {
  meow() {
    console.log("Meow!");
  }
}

type Pet = DogUnion | CatUnion;

function makeSound(pet: Pet) {
  if (pet instanceof DogUnion) {
    pet.bark();
  } else {
    pet.meow();
  }
}