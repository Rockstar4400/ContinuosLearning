/*
    Source help:
    https://mimo.org/glossary/typescript/type-alias
*/

// Example

type UserID = string;
type Coordinates = { x: number, y: number };

// You can then use UserID or Coordinates like any other type:
const userId: UserID = "abc123";
const point: Coordinates = { x: 5, y: 8 };

// Simplifying complex types
type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[];
};

// Reusing types across your project
type Address = {
  street: string;
  city: string;
  zip: string;
};

// Unions or intersections
type Status = "pending" | "approved" | "rejected";

type Action = {
    type: "CREATE" | "UPDATE" | "DELETE";
    payload: any;
}

// Union type alias
type Role = "admin" | "user" | "guest";

function redirectUser(role: Role){
    if(role === "admin"){
        // send to admin dashboard
    }
}

// Function type alias
type Logger = (msg: string) => void;

const logInfo: Logger = (message) => {
  console.log("INFO:", message);
};

// Object alias with optional properties
type Settings = {
  theme: "light" | "dark";
  notifications?: boolean;
};

// Type alias for arrays
type Usernames = string[];

const names: Usernames = ["Alice", "Bob"];

// Combining types with intersections
type Name = { first: string; last: string };
type Contact = { email: string; phone: string };

type Person = Name & Contact;

const p: Person = {
  first: "Jamie",
  last: "Doe",
  email: "jamie@example.com",
  phone: "555-1234",
};

// Diferences with interfaces
// Interfaces support declaration merging.
// Type aliases don’t merge—they throw an error.
interface Box {
  width: number;
}
interface Box {
  height: number;
}

const b: Box = { width: 10, height: 20 }; // Valid due to merging

// Naming conventions
// By convention, type aliases in TypeScript use PascalCase:
type OrderStatus = "pending" | "shipped" | "delivered";
type Point2D = { x: number; y: number };

// Using utility types with type aliases
type ProductAliasObj = {
  id: number;
  name: string;
  price: number;
};

type ProductPreview = Pick<ProductAliasObj, "id" | "name">;

// Nested type aliases
type Author = {
  name: string;
  email: string;
};

type BlogPost = {
  title: string;
  content: string;
  author: Author;
};

// Advanced use of type alias
// Conditional types
type IsString<T> = T extends string ? "Yes" : "No";

type Test = IsString<number>; // "No"
type Test2 = IsString<"hello">; // "Yes"

// Template literal types
type HTTPMethod = "GET" | "POST";
type Route = `/api/${string}`;

const route: Route = "/api/user";

// Recursive types
type CommentAlias = {
  message: string;
  replies?: CommentAlias[];
};