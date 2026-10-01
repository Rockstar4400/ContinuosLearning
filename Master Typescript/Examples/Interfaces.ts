
/*
    Source help:
    https://mimo.org/glossary/typescript/interface
*/

// Basic example
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

let user: User = {
    name: "Alice",
    age: 30,
    isAdmin: false,
}

// Implement an Interface in a Class

interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string){
        this.name = name
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

// Extend an Interface

interface Employee {
    name: string;
    id: number;
}

interface Manager extends Employee {
    department: string;
}

let teamLead: Manager = {
    name: "John",
    id: 101,
    department: "Engineering"
}

// Use an Interface to Define Function Parameters