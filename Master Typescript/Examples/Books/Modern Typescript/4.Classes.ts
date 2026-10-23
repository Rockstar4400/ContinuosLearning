
// Example
class Myclass {

    constructor(
        private myField: number,
        protected protectedField: number,
        public publicField: number,
    ){
    }
}

// Getter and setter
class MyclassSG {
  private _myField: number;
 
 get myField(): number {
      return this._myField;
 }
 set myField(value: number) {
    this._myField = value * 2;
 }
 
 constructor(value: number) {
    this._myField = value;  // Calls 'set myField(value)'
 }
}

const x = new MyclassSG(10);
console.log(x.myField); // Outputs: 20
x.myField = 3;
console.log(x.myField); // Outputs: 6

// Methods
class Person {
    constructor(public name: string) {
    }
    greet(another: Person): string {
        return `Hello ${another.name}, my name is ${this.name}!`
    }
}
const bob = new Person('Bob');
const tilly = new Person('Tilly');
tilly.greet(bob); // returns 'Hello Bob, my name is Tilly!'

// Inheritance
class Animal {
    constructor(
        private name: string,
        private sound: string
    ) {
    }
    
    makeSound(): void {
        console.log(`${this.name} is making a ${this.sound} sound`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        // When inheriting, TypeScript ensures we call the
        // parent constructor
        super(name, 'barking');
    }
}

const bugsy = new Dog('Bugsy');
bugsy.makeSound(); // Prints 'Bugsy is making a barking sound'