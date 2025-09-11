/*

Given a string, return all possible permutations of its characters, 
sorted alphabetically.

Input: String (string).

Output: Array of strings (string).

Example:

abc = [abc, acb, bac, bca, cab, cba]

*/

function stringPermutations(s: string): string[] 
| undefined | void{

    const a = s.split("");

    a.map(x => x)

    return [];
}

console.log("Example:");
console.log(stringPermutations("ab"));

// These "asserts" are used for self-checking
