/*
    Source help:
    https://mimo.org/glossary/typescript/map-type
*/

// Example readonly

interface UserMap {
    name: string;
    age: number;
}

// Mapped type that makes all properties of User, readonly
type ReadOnlyUser = {
    readonly [K in keyof UserMap]: UserMap[K];
}

const user: ReadOnlyUser = {
    name: "Alice",
    age: 30,
}

// user.name = "Bob";  
// Error! Cannot assign to 'name' because it is a read-only property.

// Example: Using Generic Mapped Types

// This syntax iterates over every key (K) in a given type (T)
type MakeOptional<T> = {
    [K in keyof T]?: T[K];
}

type OptionalUserMap = MakeOptional<UserMap>;

const user2: OptionalUserMap = {
    name: "Alice"
}// age is now optional

// Making all properties optional
type UserPartialMap = Partial<UserMap>;

const user3: UserPartialMap = {
    name: "John"
}// age is now optinal

// Making All Properties Required
type UserRequired = Required<UserMap>;

// By using -?, you remove the optional modifier from 
// all properties. ???
const user4: UserRequired = {
    name: "Eve",
    age: 25
}// Error if any property is missing

// Changing all property types
type ConvertToStrings<T> = {
    [K in keyof T]: string;
};

type UserStrings = ConvertToStrings<UserMap>;

// This transformation ensure that all values is
// UserStrings are now string instead of ther
// original types
const user5: UserStrings = {
    name: "Alice",
    age: "30"
};

// Mapping an Array to an Object Type
type ArrayToObject<T> = {
    [K in keyof T]: T[K];
}

type UserArray = ArrayToObject<UserMap[]>;

const users: UserArray = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
]

// Mapping a Union Type
type StatusMap = "success" | "error" | "loading";

type StatusMessages = {
  [K in StatusMap]: string;
};

const messages: StatusMessages = {
  success: "Operation completed",
  error: "An error occurred",
  loading: "Processing..."
};

// using conditial types with Mapped Types
type Conditional<T> = {
  [K in keyof T]: T[K] extends string ? boolean : number;
};

type UserConditional = Conditional<UserMap>;

const user6: UserConditional = {
  name: true, // Converted from string to boolean
  age: 30 // Remains a number
};

// Extending and Declaring Map Types

type BaseUser = {
  id: number;
  name: string;
};

type ExtendedUser = BaseUser & {
  [K in keyof BaseUser as `meta_${K}`]: string;
};

// This type creates new properties prefixed with meta_ while 
// keeping the original ones.
const user7: ExtendedUser = {
  id: 1,
  name: "Alice",
  meta_id: "user-1",
  meta_name: "meta-Alice"
};