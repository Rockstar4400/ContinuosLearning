/*
    Source help:
    https://dev.to/bobbyhalljr/classes-in-typescript-with-challenges-35jh
*/

/*
  Create a class called Person with the following properties: name (string), age (number), 
  and email (string). Implement a method called introduce that logs a message introducing the 
  person with their name and age.  
*/
// Hint: Inside the constructor, assign the parameter values to the class properties 
// using the this keyword.

class PersonChallenge {
    
    constructor(
        private name: string,
        private age: number,
        private email: string
    ){}

    introduce(): string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}

const test = new PersonChallenge('Alberto', 36, 'email')
console.log(test.introduce())