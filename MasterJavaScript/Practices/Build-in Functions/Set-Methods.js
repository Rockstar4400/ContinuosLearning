
/* Intersection:
Returns a new set containing elements in both
this set and the given set.
*/

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);

console.log(odds.intersection(squares));
// Set(2) {1, 9}

/* Union:
Returns a new set containing all elements in
this set and the given set
*/
const evens = new Set([2, 4, 6, 8]);
const squares2 = new Set ([1, 4, 9]);

console.log(evens.union(squares2));
// Set (6) (Number of elements)
// {2,4,6,8,1,9} (No repeating elements)

/* Difference:
Returns a new set containing elements
in this set but not in the given set
*/
const ods = new Set([1,3,5,7,9]);
const sq = new Set([1,4,9]);

console.log(odds.difference(sq));
// Set (3)
// {3,5,7}

/* SymmetricDifference
Returns a new set containing elements that 
are in either this set or the given set,
but not in both.

*/
const even = new Set([2,4,6,8]);
const sqs = new Set ([1,4,9]);

console.log(even.symmetricDifference(sqs));
//Set(5)
//{2,6,8,1,9}

/* isSubsetOf:
Return a boolean indicating if all elements
of this set are in the given set

*/
const fours = new Set([4,8,12,16]);
const eve = new Set([2,4,6,8,10,12,14,16,18]);

console.log(fours.isSubsetOf(eve))// True

/*  isSupersetOf:
Return a boolean indicating if all elements
of the given set are in this set
*/
const evens2 = 
new Set([2,4,6,8,10,12,14,16,18]);
const fours2 = new Set([4,8,12,16]);
console.log(evens2.isSupersetOf(fours2));// true

/* isDisjointFrom:
Return a boolean indicating if this set
has no elements in common with the given set
*/
const primes = new Set([2,3,5,7,11,13,17,19]);
const squarest = new Set([1,4,9,16]);

console.log(primes.isDisjointFrom(squarest)); // true
