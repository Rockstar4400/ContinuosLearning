
/*
    Source help: 
    https://mimo.org/glossary/typescript/unknown

*/

// Common narrowing techniques

// type checks
function check(value:unknown) {
if (typeof value ==="boolean") {
    return value ?"yes" :"no";
  }
    return"not a boolean";
}

// instanceof checks
function handleError(error:unknown) {
if (error instanceof Error) {
console.log(error.message);
  }
}

// in opertator for objects
function hasId(value:unknown) {
if (
    typeof value === "object" && 
    value !== null && 
    "id" in value) {
    const obj = value as { id:unknown };
    return obj.id;
  }
    return null;
}

// Type guards
type ProductNarrowing = {
id:number;
name:string;
};

function isProduct(value:unknown): value is ProductNarrowing {
if (
    typeof value !== "object" || value === null) return false;
    const obj = value as Record<string,unknown>;
    return typeof obj.id === "number" && typeof obj.name === "string";
}

// Then you get safe access
const input:unknown = {id:1,name:"Keyboard" };

if (isProduct(input)) {
console.log(input.name.toUpperCase());
}

// Generics
function parseJSON<T>(raw:string): T {
return JSON.parse(raw)as T;
}

type UserNarro = { name:string };
const user = parseJSON<UserNarro>('{"name":"Noor"}');
console.log(user.name);