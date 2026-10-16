/*
    Source help:
    https://mimo.org/tutorials/typescript/how-to-use-any-type-in-typescript
    https://mimo.org/glossary/typescript/any
*/

// Examples

// Temporary migration
function calculateTotal(data: any){
    return data.price * data.quantity;
}

// Quick experiments and prototypes
let temp:any ="start";
temp =99;
temp = [1,2,3];

// Handling dynamic JSON

function parseConfig(json: string): any {
    return JSON.parse(json);
}

// This works, but TypeScript cannot verify the structure. 
// Once you confirm the schema, define an interface and remove any.
const config = parseConfig('{"theme": "dark"}');
console.log(config.theme);

// Gradual typing in a large codebase
let cache: any = {};

cache.user = { name: "Jordan" };
cache.count = 10;

// This keeps development moving. Later, replace it with
interface Cache {
    user?: { name: string };
    count?: number;
}

// Mistake to avoid

// Forgetting that any disable safety
let valueAny: any = "Sam";
valueAny.nonExistentMethod();

// Correct approch
let valueAnyCorrect: unknown = "Sam";

// Use unknown when you want flexibility with safety.
if (typeof valueAny === "string"){
    //console.log(valueAnyCorrect.toUpperCase()); // Warning
}

// Any lets you call anything
let score:any =10;
console.log(score.toUpperCase());// allowed by TS, crashes at runtime

// Any in event handlers

//This works, but you lose useful IntelliSense and safety. 
// A better type would be something like MouseEvent
function handleClickAny(event: any){
    console.log(event.target.value);
}

// JSON parsing with any
const rawAmy = '{"id":1, "name": "Sam"}';
const dataAny: any = JSON.parse(raw);

// This might work, until the API changes and name becomes null,
// or doesn’t exist at all.
console.log(dataAny.name.toUpperCase());

// Any can spread fast
function processAny(input: any){
    return input.data.value;
}

// This compiles, but input.data might not exist.
const outputAny = processAny({something: "else"});

// Another types suggestions:

// Prefe unknown when you don't know the type yet

let inputUnkAny: unknown = "hello";

if(typeof inputUnkAny === "string"){
    console.log(inputUnkAny.toUpperCase());
}

// Use union for a few possible types
let ind: string | number;
ind = 5;
ind = "5";

// Use type guards type

type UserAny = {name:string };

function isUser(value:any): value is UserAny {
return value &&typeof value.name ==="string";
}

const dataAny2:any = {name:"Aria" };

if (isUser(dataAny2)) {
console.log(dataAny2.name.toUpperCase());
}

// Use Record <string, unknown> 

const configAny:Record<string,unknown> = {
theme:"dark",
retries:3,
};

const theme = config["theme"];

// Limit any keep it local

