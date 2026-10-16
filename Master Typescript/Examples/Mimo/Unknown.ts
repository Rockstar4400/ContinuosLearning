
/*
    Source help:
    https://mimo.org/glossary/typescript/unknown
*/

// Basic syntax
// That freedom looks like any, but unknown comes with one big rule: 
// you must check the value before using it.
let inputUnk: unknown;
inputUnk = "hello";
inputUnk = 42;
inputUnk = { online: true };
inputUnk = null;

// force type checks
let valueUnk:unknown ="mimo";

if (typeof valueUnk ==="string") {
    console.log(valueUnk.toUpperCase());
}

// Assigning unknown to a specific type
let titleUnk: string = "Dashboard";
let unknown = titleUnk;

let dataUnk: unknown = "hello";
//let nameUnk: string = dataUnk; // Type error

// Narrowing it
if (typeof dataUnk === "string"){
    let nameUnk: string = dataUnk;
}

// Using unknown in fuctions
function onPrintLength(value: unknown){
    if (typeof value === "string"){
        console.log(value.length);
    }else {
        console.log("Not a string, no lenght to print.");
    }
}

onPrintLength("Vienna");
onPrintLength(99);

// Arrays
const itemsUnk: unknown[] = [1,"two", false];

for(const itemU of itemsUnk){
    if(typeof itemU === "string"){
        console.log(itemU.toUpperCase());
    }
}

// When to use the unknown type

// Working with API response or JSON

// Accepting user input from forms
function parseAge(input:unknown) {
if (typeof input ==="string") {
    const numberAge = Number(input);
if (!Number.isNaN(numberAge)) {
return numberAge;
    }
  }
return null;
}

// Handling errors safely in catch blocks
try {
JSON.parse("broken json");
}catch (error:unknown) {
if (error instanceof Error) {
console.log(error.message);
  }else {
console.log("Something unexpected happened.");
  }
}

// Writing reusable utility functions
function safeToString(value:unknown):string {
if (typeof value ==="string")return value;
if (typeof value ==="number")return value.toString();
return"Unsupported value";
}

// Examples

// Parsing JSON safely
const raw ='{"name":"Lea","role":"admin"}';
const dataUnk2:unknown =JSON.parse(raw);

if(typeof dataUnk2 ==="object" && 
    dataUnk2 !==null &&"name"in dataUnk2){
const user = dataUnk as { name:string };
console.log(user.name);
}

// Narrowing with typeof checks
function formatValue(value:unknown) {
if (typeof value ==="string") {
return value.trim();
  }

if (typeof value ==="number") {
return value.toFixed(2);
  }

return"Unsupported type";
}

console.log(formatValue("  5  "));
console.log(formatValue(3.5));
console.log(formatValue(true));

// Validating a dynamic object
const storedUnk:unknown =
JSON.parse('{"theme":"dark","fontSize":16}');

type Settings = {
    theme:string;
    fontSize:number;
};

function isSettings(valuePara:unknown): valuePara is Settings {
if(typeof valuePara !=="object" || valuePara ===null) return false;

const obj = valuePara as Record<string,unknown>;

return (
    typeof obj.theme ==="string" &&
    typeof obj.fontSize ==="number"
  );
}

if (isSettings(storedUnk)) {
    console.log(storedUnk.theme);
    console.log(storedUnk.fontSize);
}else {
    console.log("Invalid settings format, using defaults.");
}

// unknown in event-drive code
function handleMessage(payload:unknown) {
if (typeof payload ==="string") {
    console.log("Message:", payload);
return;
  }

if (typeof payload ==="object" && payload !== null) {
    console.log("Object message received.");
return;
  }
    console.log("Unsupported payload type.");
}