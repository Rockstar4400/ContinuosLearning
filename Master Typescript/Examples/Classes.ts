
/*
    Source help:
    https://mimo.org/glossary/typescript/class
*/

// Basic example

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hi, I'm 
            ${this.name} and I'm 
            ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.introduce(); // Output: Hi, I'm Alice and I'm 30 years old.

// Inheritance

class Animal{
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

const myDog = new Dog();
myDog.move(); // Output: Moving...
myDog.bark(); // Output: Woof!

// Static properties and methods

class MathHelper {
    static PI: number = 3.14;

    static square(num: number): number {
        return num * num;
    }
}

console.log(MathHelper.PI); // Output: 3.14
console.log(MathHelper.square(5)); // Output: 25

// Abstract Classes

abstract class Vehicle {
    abstract drive(): void;
}
// If the class doesn't define the method Inheritanced then:
// Non-abstract class 'Car' does not implement inherited abstract 
// member drive from class 'Vehicle'.
class Car extends Vehicle {
   drive(): void {
       console.log("Car is driving.")
   } 
}

const myCar = new Car();
myCar.drive(); // Output: Car is driving.

// Implementing Multiple Behaviors with Interfaces
interface Logger {
    log(message: string): void;
}

interface Calculator {
    calculate(a: number, b: number): number;
}

// A class can implements many interfaces
class FinanceClass implements Logger, Calculator{ 
    log(message: string): void {
        console.log(`Log: ${message}`);
    }

    calculate(a: number, b: number): number {
        return a + b;
    }
}

const app = new FinanceClass();
app.log("Transaction successful."); // Output: Log: Transaction successful.
console.log(app.calculate(10, 20)); // Output: 30

// ReadOnly properties

class Config {
  readonly apiKey: string = "12345-ABCDE";
}

const settings = new Config();
console.log(settings.apiKey); // Output: 12345-ABCDE
// settings.apiKey = "67890"; 
// Error: Cannot assign to 'apiKey' because it is a read-only property.

// Differences between class and interface
// A class defines structure and behavior, 
// whereas an interface only defines structure.

// Example

interface PersonInterface {
    name: string;
    speak(): void;
}

class Student implements PersonInterface {
    constructor(public name: string){}

    speak(): void {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Example: Class decorators
// A class decorator modifies a class at runtime

function logClass(target: Function){
    console.log(`Class ${target.name} was created.`);
}

@logClass
class Account{
    constructor(public balance: number) {}
}