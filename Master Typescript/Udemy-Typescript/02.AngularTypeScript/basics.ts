// primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let instructor: boolean;
instructor = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// Alias
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

let people: Person[];

// type inference
let course: string | number = 'test';

// Functions and types

function add3(a: number, b: number): number{
    return a + b;
}

function print(value: any){
    console.log(value)
}

// Generics
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);


// Classes
class Student {

    constructor(
        public first: string, 
        public last: string, 
        public age: number, 
        private courses: string[]) {

        this.first = first;
        this.last = last;
        this.age = age;
        this.courses = courses;
    }
    
    enroll(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz',32, ['Angular']);
student.enroll('React');

// Interfaces
interface Human {
    first: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    first: 'Max',
    age: 32,
    greet() {
        console.log('Hello')
    },
};

class Instructor implements Human {
    first: string;
    age: number;
    greet(){
        console.log('Hello')
    }
}