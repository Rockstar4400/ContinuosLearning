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