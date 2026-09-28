
/* 
    source help: 
    https://mimo.org/glossary/typescript/type-assertion
*/

// Examples

const input = document.getElementById("email") as HTMLInputElement;

// Empty Arrays

const users = [] as { id: number; name: string }[];

// Parsing JSON

const json = '{"id": 101, "name": "Jane"';
const user = JSON.parse(json) as { id: number; name: string };

// Asserting Return Types

function fetchData(): any {
    return "hello";
}

const message = fetchData() as string;

// Assertion Functions

function assertIsString(value: unknown): asserts value is string{
    if(typeof value !== "string"){
        throw new Error("Expected a string");
    }
}

function handleInput(value: unknown){
    assertIsString(value);
    console.log(value.toUpperCase());
}

// Double assertion

const id = "42" as unknown as number;

// Potential Risks

//const count = "ten" as number; ERROR

// DOM Element Assertions

const form = document.querySelector("form") as HTMLFormElement;
form.submit();

// Assertions vs. Annotations

const amount: number = 100; // Annotation
const result = "100" as string; // Assertion

// Assertions in Generic Functions

function getFromStorage<T>(key: string): T {
    const item = localStorage.getItem(key);
    return JSON.parse(item!) as T;
}

// Advanced Patterns and Types

type StatusType = "idle" | "loading" | "done"; // literal types
enum Role_Assertion { Admin = "admin", Editor = "editor" } // enums
//const state = JSON.parse(data) as { status: StatusType; role: Role }; // ???

// Asserting tuples

const point = JSON.parse("[10, 20]") as [number, number];

// Libraries and Callbacks

//api.fetch((data: unknown) => {
//  const user = data as {id: number; email: string };
//})