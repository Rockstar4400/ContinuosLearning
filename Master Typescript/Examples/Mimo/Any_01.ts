/*
    Source help:
    https://mimo.org/tutorials/typescript/how-to-use-any-type-in-typescript
    https://mimo.org/glossary/typescript/any
*/

// Basic syntax
let value:any;

value = 42;
value = "hello";
value = { ready: true}


// Function parameter
function logValue(input: any){
    console.log(input);
}

logValue("test");
logValue(123);
logValue({ok: true});

// Typing return values with any
function parseSomething(raw: string): any{
    return JSON.parse(raw);
}

const result = parseSomething('{"name: "Mia"}');

// Arrays
const mixed:any[] = [1,"two",false, {count: 3}];

let itemsAny: any[] = [];

itemsAny.push("text");
itemsAny.push(100);
itemsAny.push({ id: 1 });

// Objects
const settingsAny:any = {
    theme: "dark",
    refreshRate: 30,
};

interface ApiResponse {
    status: string;
    payload: any;
}
