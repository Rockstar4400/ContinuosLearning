/*
In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but cannot consist of just digits.
Input: A string (string).

Output: A logic value (boolean).

Examples:

1
assert.strict
*/
import assert from "assert";
// Taken from mission Acceptable Password II
function isAcceptablePassword(password: string): boolean {
    const regex = /[a-zA-Z_]{6}\d{1}/;
    const pass = password.length >= 6 && regex.test(password) ? true : false;
    return pass;
}


console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
