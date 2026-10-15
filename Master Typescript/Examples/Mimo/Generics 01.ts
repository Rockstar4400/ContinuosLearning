/*
    Source help:
    https://mimo.org/glossary/typescript/generics
*/

function identity<T>(arg: T): T{
    return arg;
}

console.log(identity<string>("Hello")) // hello
console.log(identity<number>(42)); // 42

// Generic Functions
function getFirst<T>(arr: T[]): T{
    return arr[0];
}

console.log(getFirst([10, 20, 30])); // 10
console.log(getFirst(["a", "b", "c"]));// a

// Generic Interfaces
interface BoxG<T> {
    value: T;
}

let numberBoxG: BoxG<number> = { value: 123 };
let stringBoxG: BoxG<string> = { value: "Hello" };

console.log(numberBoxG.value); // 123
console.log(stringBoxG.value) // Hello

// Generic Classes
class StorageGeneric<T> {
    private data: T[] = [];

    addItem(item: T): void{
        this.data.push(item);
    }

    getItem(): T[]{
        return this.data;
    }
}

const numberStorageGeneric = new StorageGeneric<number>();
numberStorageGeneric.addItem(10);
numberStorageGeneric.addItem(20);
console.log(numberStorageGeneric.getItem()); // [10, 20]

const stringStorageGeneric = new StorageGeneric<string>();
stringStorageGeneric.addItem("Apple");
console.log(stringStorageGeneric.getItem()); // ["Apple"]