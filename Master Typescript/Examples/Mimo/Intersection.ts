
/*
    Source help:
    https://mimo.org/glossary/typescript/intersection-types
*/

// Example
type A = { a: number };
type B = { b: string };

type AB = A & B;// AB has both 'a' and 'b' properties

// Using interfaces with intersection types
interface Drawable {
    draw(): void;
}

interface Clickable {
    click(): void;
}

type UIElement = Drawable & Clickable;

const button: UIElement = {
    draw: () => console.log("Drawing button"),
    click: () => console.log("Clicking button")
};

// Function parameters and intersection types
interface LoggerInter {
    log(message: string): void;
}

interface Timestamped {
    timestamp: Date;
}

function logEvent(event: LoggerInter & Timestamped){
    console.log(`[${event.timestamp.toISOString()}]`);
    event.log("Event occurred.");
}

// Intersection types with classes
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Flyable {
  fly(): void;
}

type FlyingAnimal = Animal & Flyable;

const bird: FlyingAnimal = {
  name: "Eagle",
  fly: () => console.log("Flying high")
};

// Optional and conflicting properties
type AI = { status: string };
type BI = { status: number };

// ERROR: 'string' is not assignable to 'number' - never ???
type CI = AI & BI; 

// Generic intersection types
function mergeInter<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

// result has both 'id' and 'name' properties
const resultInter = mergeInter({ id: 1 }, { name: "Test" });

// Intersection with primitive types
type AVB = string & number; // type AVB = never

// Example: Component composition
type OwnProps = { id: string };
type ReduxProps = { dispatch: Function };

type Props = OwnProps & ReduxProps;

// Example: Combining API Responses shapes
type User = { id: number; username: string };
type Profile = { bio: string; avatar: string };

type FullUser = User & Profile;

// Exaple: Combining with utility types
type Config = { url: string; timeout: number };
// Here, timeout is optional, but url remains required.
type PartialConfig = Partial<Config> & { url: string };