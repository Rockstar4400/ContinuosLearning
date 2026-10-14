/*
    Source help:
    https://mimo.org/glossary/typescript/utility-types
*/

// Partial

type UserType ={
    name: string;
    age: number;
}

type PartialUser = Partial<UserType>;

// Now this is valid:
const u: PartialUser = { name: "Alice" };

// Required

type OptionalUser = {
    name?: string;
    age?: number;
}

type RequiredUser = Required<OptionalUser>;

 // Both fields now required
const ud: RequiredUser = { name: "Bob", age: 28 };

// Readonly

type UserRead = {
    name: string;
    age: number;
}

// u.age = 23; // Error: Cannot assign to 'age'
const udd: Readonly<UserRead> = { name: "Carol", age: 22 };

// Pick 

type UserObj = {
    id: number;
    name: string;
    email: string;
}

type BasicUser = Pick<UserObj, "id" | "name">;

// Omit

type BasicUser2 = Omit<UserObj, "email">;

// Record

type Scores = Record<string, number>;

const gameScores: Scores = {
    Alice: 90,
    Bob: 85
}