

/*
    Source help:
    https://mimo.org/glossary/typescript/map-type
*/

// Example readonly

interface User {
    name: string;
    age: number;
}

// Mapped type that makes all properties of User, readonly
type ReadOnlyUser = {
    readonly [K in keyof User]: User[K];
}

const user: ReadOnlyUser = {
    name: "Alice",
    age: 30,
}

// user.name = "Bob";  
// Error! Cannot assign to 'name' because it is a read-only property.

// Example: Using Generic Mapped Types

type MakeOptional<T> = {
    [K in keyof T]?: T[K];
}

type OptionalUser = MakeOptional<User>;

const user2: OptionalUser = {
    name: "Alice"
}