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

