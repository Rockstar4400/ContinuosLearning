/*
    Source help:
    https://mimo.org/glossary/typescript/typeof-type-operator
*/

// Example
const userTypeOf = {
    name: "Alice",
    age: 30,
}

// UserType now refers to the type { name: string; age: number }
type UserTypeUtil = typeof userTypeOf;

// typeof with Constants

const config = {
    baseURL: "https://api.example.com",
    timeout: 5000,
}

// as const
type ConfigType = typeof config;

// typeof with Arrays

const colors = ["red", "green", "blue"];

// Entire array type
type ColorArray = typeof colors; // string[]

// Union of item values
type ColorItem = typeof colors[number]; // "red" | "green" | "blue"

// typeof with Functions

function greet(name: string): string {
    return `Hello, ${name}`;
}

type GreetFn = typeof greet;

const sayHi: GreetFn = (name) => `Hi, ${name}`;

// Combining typeof and keyof

const statusType = {
    success: "SUCCESS",
    error: "ERROR",
    pending: "PENDING",
}

// "success" | "error" | "pending"
type StatusKey = keyof typeof statusType;
// "SUCCESS" | "ERROR" | "PENDING" 
type StatusValue = typeof statusType[StatusKey]; 

// Runtime type checks with typeof

function checkType(val: unknown){
    if(typeof val === "string"){
        console.log("It's a string!");
    }
}

// Type Narrowing with Switch and typeof

function printValue(value: string | number | boolean){
    switch(typeof value){
        case "string":
            console.log(value.toLocaleUpperCase());
            break;
        case "number":
            console.log(value.toFixed(2));
            break;
        case "boolean":
            console.log(value ? "Yes" : "No");
            break;
    }
}

// Inferring Complex Types from Nested Constants

const Theme = {
    colors: {
        primary: "#000",
        secondary: "#FFF",
    },
    spacing: {
        small: 4,
        large: 16,
    },
};

type ThemeType = typeof Theme;
type ColorKeys = keyof typeof Theme.colors;// "primary" | "secondary"

// Getting Return types with typeof

function getUser(){
    return {
        id: 1,
        name: "Jane"
    }
}

// { id: number; name: string }
type UserTypeOf = ReturnType<typeof getUser>;

// Defining Literal Union Types from Constants
const Role = {
    ADMIN: "admin",
    USER: "user",
} as const;

type RoleType = typeof Role[keyof typeof Role]; // "admin" | "user"

// Building Generic Utilities with typeof
const actionsTypeOf = {
    add: (a: number, b: number) => a + b,
    substract: (a: number, b: number) => a - b,
};

type ActionKeys = keyof typeof actionsTypeOf;
type ActionFN = typeof actionsTypeOf[ActionKeys];
