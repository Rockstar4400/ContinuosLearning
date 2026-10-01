/*

In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but it cannot consist of just digits;
if the password is longer than 9 - previous rule is not required.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);
*/

function isAcceptablePassword(password: string): boolean {
    const regex = /[a-zA-Z_]{6}\d{1}/;
    const pass = password.length > 6 && regex.test(password) ? true : false;
    return pass;
}

console.log(isAcceptablePassword("short"));// false
console.log(isAcceptablePassword("short54")); // true
console.log(isAcceptablePassword("muchlonger")); // true
console.log(isAcceptablePassword("ashort")); // false