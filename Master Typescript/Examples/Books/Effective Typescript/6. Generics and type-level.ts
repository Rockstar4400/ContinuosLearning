
// Example Custom Partial
type myPartial<T> = {[K in keyof T]?: T[K]};

// Here T is the type parameter. You can see that this works 
// exactly the same as the built-in Partial type:

interface Person {
  name: string;
  age: number;
}

type MyPartPerson = myPartial<Person>;
//   ^? type MyPartPerson = { name?: string; age?: number; }

type PartPerson = Partial<Person>;
//   ^? type PartPerson = { name?: string; age?: number; }

// Example Custom Pick
// PropertyKey is a built-in alias for string | number | symbol

// First attempt
//type MyPick<T, K> = { [P in K & PropertyKey]: T[P & keyof T] };

// Second attempt
//type MyPick<T, K> = {[P in K & PropertyKey]: T[P & keyof T]};

/**
 * Construct a new object type using a subset of the properties of another one
 * (same as the built-in `Pick` type).
 * @template T The original object type
 * @template K The keys to pick, typically a union of string literal types.
 */
type MyPick<T extends object, K extends keyof T> =
{[P in K]: T[P]};

type AgeOnly = MyPick<Person, 'age'>;
//type FirstNameOnly = MyPick<Person, 'firstName'>;

// Generic functions

function pick<T extends object, K extends keyof T>(
  obj: T, ...keys: K[]
): Pick<T, K> {
  const picked: Partial<Pick<T, K>> = {};
  for (const k of keys) {
    picked[k] = obj[k];
  }
  return picked as Pick<T, K>;
}

const p: Person = { name: 'Matilda', age: 5.5 };
const age = pick(p, 'age');
//    ^? const age: Pick<Person, "age">
console.log(age);  // logs { age: 5.5 }

type P = typeof pick;

// Generic classes

class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const dateBox = new Box(new Date());
//    ^? const dateBox: Box<Date>