/*
    Source help:
    https://mimo.org/glossary/typescript/generics
*/

// Examples of Generics
interface Lengthy {
    length: number;
}

function getLength<T extends Lengthy>(item: T): number{
    return item.length;
}

console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3

// Arrow Functions
const reverseArray = <T>(items: T[]): T[] => items.reverse();

console.log(reverseArray([1, 2, 3])) // [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2}
}

const PersonGeneric = merge({name: "Alice"}, { age: 30 });
console.log(PersonGeneric); // { name: "Alice", age: 30}

// Optional Generics
function wrapValueGeneric<T = string>(value: T): { wrapped: T } {
    return { wrapped: value };
}

// Object types generics
function extractPropertyGeneric
<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = { name: "John", age: 28 };
console.log(extractPropertyGeneric(user, "name")); // John

// Generic Arrays
function filterItems
<T>(arr: T[], predicate: (item: T) => boolean) : T[] {
    return arr.filter(predicate);
}
 
// Output: [3, 4]
console.log(filterItems([1, 2, 3, 4], (n) => n > 2));
 // Output: ["banana"]
console.log(filterItems(["apple", "banana"], (s) => s.includes("a")));

// Advanced Generic Constraints
interface HasId{
    id: number;
}

// This function ensures only objects with an id property can be used.
function findById
<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find((item) => item.id === id);
}

const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
console.log(findById(users, 2)); // Output: { id: 2, name: "Bob" }

// This function provides a way to check types without 
// losing generic flexibility.
function isString<T>(value: T): boolean {
    return typeof value === "string";
}

console.log(isString("hello")); // true
console.log(isString(100)); // false