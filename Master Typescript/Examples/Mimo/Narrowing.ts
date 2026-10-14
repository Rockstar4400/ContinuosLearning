
/*
    Source help: 
    https://mimo.org/glossary/typescript/type-narrowing

*/

// Basic Example:
function printValue(val: string | number) {
    if (typeof val === "string") {
        console.log(val.toUpperCase()); // val is narrowed to string
    }   else{
        console.log(val.toFixed(2)); // val is narrowed to number
    }
}

// Example with typeof

function handleInput(input: string | number){
    if(typeof input === "string") {
        console.log("String lenght:", input.length);
    }else{
        console.log("Number squared:", input * input);
    }
}

// Example with instanceof

class Dog {
    bark(){
        console.log("Woof!");
    }
}

class Cat {
    meow(){
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

// Example with Discriminated Unions

type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };
type Shape = Square | Circle;

function area(shape: Shape) {
    if(shape.kind === "square"){
        return shape.size ** 2;
    }else{
        return Math.PI * shape.radius ** 2;
    }
}

// Example with in Operator

type Car = { make: string; model: string };
type Bike = { brand: string; gearCount: number };

function describeVehicle(vehicle: Car | Bike ){
    if("make" in vehicle){
        console.log(`Car:${vehicle.make} ${vehicle.model}`);
    }else{
        console.log(`Bike: ${vehicle.brand} 
            with ${vehicle.gearCount} gears`); // with ?
    }
}

// Example with Null Checks

function greet(user: string | null){
    if (user !== null) {
        console.log(`Hello, ${user}`);
    }else {
        console.log("No user provided");
    }
}

// Example custom type guard

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet:Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; 
    // return undefined if it's no swim?
}

function move(animal: Fish | Bird){
    if(isFish(animal)){
        animal.swim();
    }else{
        animal.fly();
    }
}

// Example type Predicates

function isString(value: unknown): value is string{
    return typeof value === "string";
}

// Example Exhaustiveness Checks

function getShapeName(shape: Shape): string {
    switch (shape.kind){
        case "square":
            return "Square";
        case "circle":
            return "Circle";
    
    default:
    const _exhaustive: never = shape;
    return _exhaustive;
    }
}

// Example Inside Loops

function logAll(values: (string | number)[]){
    for (const val of values){
        if(typeof val === "string"){
            console.log("Uppercased:", val.toUpperCase());
        }else{
            console.log("Fixed:", val.toFixed(2));
        }
    }
}

// Example Combining Multiple Narrowing Techniques

function process(value: string | number | Date){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else if (typeof value === "number"){
        console.log(value.toFixed(1));
    }else if (value instanceof Date){
        console.log(value.toISOString());
    }
}