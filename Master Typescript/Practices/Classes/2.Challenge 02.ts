/*
  Create a class called Car with the following properties: make (string), model (string), 
  and year (number). Implement a method called startEngine that logs a message indicating 
  that the car's engine has started.  
*/
class CarChallenge {
  // Properties
  make: string;
  model: string;
  year: number;

  // Constructor
  constructor(make: string, model: string, year: number) {
    // Your code goes here
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method
  startEngine() {
    // Your code goes here
    console.log(`car ${this.model} has started.`)
  }
}

const test = new CarChallenge('Running', 'Camaro', 2001);
test.startEngine();