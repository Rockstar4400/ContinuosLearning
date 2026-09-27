
/* 
    source help: 
    https://mimo.org/glossary/typescript/type-assertion
*/

// Examples

const input = document.getElementById("email") as HTMLInputElement;

// Empty Arrays

const users = [] as { id: number; name: string }[];

// Parsing JSON

const json = '{"id": 101, "name": "Jane"';
const user = JSON.parse(json) as { id: number; name: string };

// Asserting Return Types

function fetchData(): any {
    return "hello";
}

const message = fetchData() as string;

// Assertion Functions

